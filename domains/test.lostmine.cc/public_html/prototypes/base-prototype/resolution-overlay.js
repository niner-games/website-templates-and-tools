(function () {
    function getOverlay() {
        return document.getElementById('resolution-overlay');
    }
    
    function createOverlay() {
        const overlay = document.createElement("div");
        
        overlay.id = "resolution-overlay";
        
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.position = "fixed";
        
        overlay.style.color = "#aaa";
        overlay.style.padding = "3px";
        overlay.style.fontSize = "11px";
        overlay.style.margin = "7px 0 0 7px";
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        overlay.style.border = "solid 2px rgba(255, 255, 255, 0.2)";
        
        document.body.appendChild(overlay);
    }

    function handleResize() {
        var overlay = getOverlay();
        
        overlay.innerHTML = `Page resolution: <b>${window.innerWidth}</b> x <b>${window.innerHeight}</b> px`;
    }
    
    createOverlay();
    handleResize();
    
    window.addEventListener('resize', handleResize);
}());
