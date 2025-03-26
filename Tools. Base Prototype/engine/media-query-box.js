const defaultMediaQueryOverlayFontSize = '14px';
const defaultMediaQueryOverlayElementId = 'media-query-overlay';

const MediaQueryBox = {
    id: defaultMediaQueryOverlayElementId,
    
    isSet: function (variable, def = undefined) {
        if (typeof variable === 'string') {
            return (variable.trim() !== '') ? variable : def;
        } else if (typeof variable === 'object') {
            return variable
        } else return def;
    },
    
    getId() {
        return this.isSet(this.id, defaultMediaQueryOverlayElementId);
    },

    getOverlay: function() {
        let overlay = document.getElementById(this.getId());
        
        return this.isSet(overlay) ? overlay : this.createOverlay();
    },
    
    createOverlay: function() {
        let overlay = document.createElement("div");
        
        overlay.id = this.getId();
        
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.position = "fixed";
        
        overlay.style.padding = "3px";
        overlay.style.margin = "7px 0 0 7px";
        overlay.style.fontSize = defaultMediaQueryOverlayFontSize;
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        overlay.style.border = "solid 2px rgba(255, 255, 255, 0.5)";
        
        return document.body.appendChild(overlay);
    },
    
    handleResize: function() {
        let overlay = this.getOverlay();
        let mq = "MQ6";
        let res = "Ultra HD screens, banner displays";
        let mediaqueries = {480: "MQ1", 768: "MQ2", 1024: "MQ3", 1200: "MQ4", 1800: "MQ5"};
        
        let orientation = (window.innerHeight > window.innerWidth) ? "portrait" : "landscape";
        
        let resolutions = {
            480: "Phones",
            768: "Tablets",
            1024: "Small screens, laptops",
            1200: "HD screens, desktops",
            1800: "Full HD screens, big displays"
        };
        
        for (let width in resolutions) {
            if (window.innerWidth <= parseInt(width)) {
                res = resolutions[width];
                mq = mediaqueries[width];
                break;
            }
        }
        
        overlay.innerHTML = `
            <b>${window.innerWidth}</b> x <b>${window.innerHeight}</b> px (${orientation})<br />
            <b>${mq}</b>: ${res}
        `;
    }
};

resizeFunc = function() {
    MediaQueryBox.handleResize();
};

window.addEventListener("load", resizeFunc);
window.addEventListener("resize", resizeFunc);