const defaultResulotionOverlayElementId = 'resolution-overlay';

const ResBox = {
    id: defaultResulotionOverlayElementId,
    
    isSet: function (variable, def = false) {
        if (typeof variable === 'string') {
            return (variable.trim() !== '') ? variable : def;
        } else if (typeof variable === 'object') {
            return variable
        } else return def;
    },
    
    getId() {
        return this.isSet(this.id, defaultResulotionOverlayElementId);
    },

    getOverlay: function() {
        let overlay = document.getElementById(this.getId());
        
        console.log(typeof overlay);
        
        return this.isSet(overlay) ? overlay : this.createOverlay();
    },
    
    createOverlay: function() {
        let overlay = document.createElement("div");
        
        overlay.id = this.getId();
        
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.position = "fixed";
        
        overlay.style.color = "#aaa";
        overlay.style.padding = "3px";
        overlay.style.fontSize = "11px";
        overlay.style.margin = "7px 0 0 7px";
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        overlay.style.border = "solid 2px rgba(255, 255, 255, 0.2)";
        
        return document.body.appendChild(overlay);
    },
    
    handleResize: function() {
        let overlay = this.getOverlay();
        
        overlay.innerHTML = `Page resolution: <b>${window.innerWidth}</b> x <b>${window.innerHeight}</b> px`;
    }
};

resizeFunc = function() {
    ResBox.handleResize();
};

window.addEventListener("load", resizeFunc);
window.addEventListener("resize", resizeFunc);