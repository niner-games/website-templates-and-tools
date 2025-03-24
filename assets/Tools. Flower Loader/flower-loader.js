let activeLoaders = [];

/**
 * Initializes the flower loader animation with a dimmer.
 * Dynamically creates a canvas and dimmer element, which can either cover the given DOM element
 * or the entire screen if no element is specified.
 *
 * @param {HTMLElement} [targetElement] - The DOM element to cover (optional).
 * @returns {object} - An object containing the canvas and dimmer elements for this loader.
 */
function initFlowerLoader(targetElement) {
    const dimmer = document.createElement('div');
    const canvas = document.createElement('canvas');

    if (!targetElement) {
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    
        Object.assign(dimmer.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '9998',
        });

        Object.assign(canvas.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            pointerEvents: 'none',
            backgroundColor: 'transparent',
        });

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);

        const resizeListener = () => window.removeEventListener('resize', resizeCanvas);
        
        activeLoaders.push({ canvas, dimmer, resizeListener });
    } else {
        const parentRect = targetElement.getBoundingClientRect();
        
        Object.assign(dimmer.style, {
            position: 'absolute',
            top: `${parentRect.top + window.scrollY}px`,
            left: `${parentRect.left + window.scrollX}px`,
            width: `${parentRect.width}px`,
            height: `${parentRect.height}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '9998',
        });

        Object.assign(canvas.style, {
            position: 'absolute',
            top: dimmer.style.top,
            left: dimmer.style.left,
            zIndex: '9999',
            pointerEvents: 'none',
            backgroundColor: 'transparent',
        });

        canvas.width = parentRect.width;
        canvas.height = parentRect.height;
        activeLoaders.push({ canvas, dimmer });
    }

    document.body.appendChild(dimmer);
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const numPetals = 12;
    const petalRadius = Math.min(canvas.width, canvas.height) / 12;
    const petalLength = petalRadius * 0.2;
    const petalWidth = petalRadius * 0.2;
    const centerRadius = petalRadius * 0.2;
    const petalColor = "#222222";
    const centerColor = "#222222";
    let angle = 0;

    function drawFlower() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        for (let i = 0; i < numPetals; i++) {
            ctx.save();
            const theta = angle + (i * 2 * Math.PI / numPetals);
            ctx.rotate(theta);
            ctx.beginPath();
            ctx.ellipse(0, petalRadius, petalWidth, petalLength, 0, 0, 2 * Math.PI);
            ctx.fillStyle = petalColor;
            ctx.fill();
            ctx.restore();
        }

        ctx.beginPath();
        ctx.arc(0, 0, centerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = centerColor;
        ctx.fill();
        ctx.restore();

        angle += 0.02;
        requestAnimationFrame(drawFlower);
    }

    drawFlower();

    return { canvas, dimmer };
}

/**
 * Starts the flower loader. Optionally provides a target element.
 * @param {HTMLElement} [targetElement] - The DOM element to cover.
 * @returns {object} - The loader instance.
 */
function startFlowerLoader(targetElement) {
    return initFlowerLoader(targetElement);
}

/**
 * Stops the flower loader by removing its canvas and dimmer from the DOM.
 * @param {object} loader - The loader instance to stop (canvas, dimmer).
 */
function stopFlowerLoader(loader) {
    if (!loader) return;
    
    if (loader.canvas && loader.canvas.parentNode) loader.canvas.parentNode.removeChild(loader.canvas);
    if (loader.dimmer && loader.dimmer.parentNode) loader.dimmer.parentNode.removeChild(loader.dimmer);
    
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
}

/**
 * Automatically displays a full-screen loader before the user leaves the page.
 */
function bindPageUnloadLoader() {
    window.addEventListener('beforeunload', function () {
        startFlowerLoader();
    });
}

/**
 * Performs an AJAX request, updates the target element's content, and handles the loader.
 * @param {HTMLElement} targetElement - The target div element.
 * @param {string} url - The URL to fetch data from.
 * @param {string} responseType - The type of response expected ('text', 'json', or 'html').
 * @param {function|null} onSuccessCallback - Optional. A function to execute upon a successful response. Receives the response data as its only argument.
 * @param {function|null} onErrorCallback - Optional. A function to execute upon an error response. Receives an error object as its only argument.
 */

function fetchDataWithLoader(targetElement, url, responseType = 'json', onSuccessCallback = null, onErrorCallback = null) {
    const loader = startFlowerLoader(targetElement);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                if (onErrorCallback && typeof onErrorCallback === 'function') {
                    onErrorCallback({
                        url: response.url,
                        status: response.status,
                        statusText: response.statusText,
                    });
                    
                    return null;
                } else {
                    targetElement.innerHTML = `<pre style="color: red;">url: ${response.url || "(unavailable)"}\nstatus: ${response.status || "(unavailable)"}\nmessage: ${response.message || "(unavailable)"}\nstatusText: ${response.statusText || "(unavailable)"}</pre>`;
                    console.error("Response:", response);
                    return null;
                }
            }

            if (responseType === 'text') {
                return response.text();
            } else if (responseType === 'html') {
                return response.text();
            } else {
                return response.json();
            }
        })
        .then(data => {
            if (data === null) return;

            if (onSuccessCallback && typeof onSuccessCallback === 'function') {
                onSuccessCallback(data);
            } else {
                if (responseType === 'html') {
                    targetElement.innerHTML = data;
                } else if (responseType === 'text') {
                    targetElement.innerText = data;
                } else {
                    targetElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
                }
            }
        })
        .catch(error => {
            if (onErrorCallback && typeof onErrorCallback === 'function') {
                onErrorCallback(error);
            } else {
                targetElement.innerHTML = `<pre style="color: red;">url: ${error.url || "(unavailable)"}\nstatus: ${error.status || "(unavailable)"}\nmessage: ${error.message || "(unavailable)"}\nstatusText: ${error.statusText || "(unavailable)"}</pre>`;
                console.error("Response:", response);
            }
        })
        .finally(() => {
            stopFlowerLoader(loader);
        });
}
