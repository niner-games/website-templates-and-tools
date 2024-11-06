const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, 'datadump.env');

if (!fs.existsSync(envFilePath)) {
    console.error(`Error: ${envFilePath} not found.`);
    process.exit(1);
}

dotenv.config({ path: envFilePath });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN is not defined in the .env file.');
    process.exit(1);
}

const username = process.env.USERNAME;
const filename = process.env.FILENAME;
const repoNames = process.env.REPO_NAMES.split(',');

if (!username || !filename || !repoNames.length) {
    console.error('Error: Required parameters (USERNAME, FILENAME, REPO_NAMES) are not defined in the .env file.');
    process.exit(1);
}

const repos = repoNames.map(repo => ({
    name: repo,
    url: `https://raw.githubusercontent.com/${username}/${repo}/main/${filename}`
}));

const resultFilePath = path.join(__dirname, 'result.json');

async function fetchContent(repo) {
    console.log(`Fetching URL: ${repo.url}`);
    try {
        const response = await fetch(repo.url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        });

        if (response.ok) {
            return await response.text();
        } else {
            console.error(`Failed to fetch: ${repo.url}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching ${repo.url}:`, error);
        return null;
    }
}

async function main() {
    const currentDateTime = new Date().toISOString();
    console.log(`Script executed at: ${currentDateTime}`);

    const results = {};

    for (const repo of repos) {
        const content = await fetchContent(repo);
        if (content !== null) {
            results[repo.name] = content;
        }
    }

    fs.writeFileSync(resultFilePath, JSON.stringify(results, null, 2), 'utf8');
    console.log(`Data dumped to ${resultFilePath}`);
}

main();
