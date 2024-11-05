<!--suppress ALL -->

<p align="center">
    <a href="https://www.ninergames.com/" target="_blank">
        <img src="https://ninergames.com/Niner-Games-Logo-for-GitHub.png" alt="Logo of Niner Games" width="300" height="238">
    </a>
</p>

<p align="center">
    <img src="TITLE.svg" width="600" height="63" alt="Animated Title: Website and Company Hosting Structure">
</p>

<hr>

Hosting structure used for hosting all pages, SEO stubs etc. for our games.

Redirecting several domains to one shared folder
------------------------------------------------

Main domain ([`https://ninergames.com/`](https://ninergames.com/)) is currently served by Wordpress and therefore Wordpress installation is deployed to [`domains/ninergames.com/public_html`](https://github.com/niner-games/tech-server-webpages/tree/main/domains/ninergames.com/public_html) folder.

If we would ever like to user Wordpress Network feature ([1](https://developer.wordpress.org/advanced-administration/multisite/create-network/), [2](https://www.smashingmagazine.com/2020/01/complete-guide-wordpress-multisite/), [3](https://learn.wordpress.org/tutorial/introduction-to-wordpress-multisite-networks/), [4](https://www.hostinger.com/tutorials/activate-wordpress-multisite), [5](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), [6](https://gowp.com/wordpress-multisite-tutorial/)) -- point more domains to the same Wordpress installation (for i.e. marketing purposes) -- then this is not achievable via AfterMarket.pl's DirectAdmin and must be done manually.

Steps:

1. Ask AfterMarket.pl's support to enable `open_basedir` setting in PHP for added domain or domains (contact them at: <kontakt@aftermarket.hosting>, must write from gaman's email address!)

2. Login to `web5.aftermarket.hosting:22` via PuTTy / SSH.

3. Execute the following commands (an example for the `cavo.pl` domain):

```bash
mv /home/trejder/domains/cavo.pl/public_html /home/trejder/domains/cavo.pl/public_html_old
ln -s /home/trejder/domains/acrid.pl/public_html /home/trejder/domains/cavo.pl/public_html
```

(since these commands operate on absolute paths, they can be executed in any folder)

4. Check everything, if it is working.

More information: [in a private email exchange](https://mail.google.com/mail/u/0/#all/FMfcgzGxSbrtwvzJDpcxwGFwgjwGmJNv).
