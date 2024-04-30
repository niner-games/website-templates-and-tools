window.addEventListener("load", function() {
    UrlBox.setUrl('https://yqq.pl/proto/base');
});

const defaultUrlOverlayElementId = 'url-overlay';

const UrlBox = {
    url: window.location.href,
    id: defaultUrlOverlayElementId,
    
    isSet: function (variable, def = false) {
        if (typeof variable === 'string') {
            return (variable.trim() !== '') ? variable : def;
        } else if (typeof variable === 'object') {
            return variable
        } else return def;
    },
    
    getId() {
        return this.isSet(this.id, defaultUrlOverlayElementId);
    },

    getOverlay: function() {
        let overlay = document.getElementById(this.getId());
        
        return this.isSet(overlay) ? overlay : this.createOverlay();
    },
    
    createOverlay: function() {
        let url = this.isSet(this.url, window.location.href);
        let overlay = document.createElement("div");
        
        overlay.id = this.getId();
        
        overlay.style.top = "0";
        overlay.style.right = "0";
        overlay.style.color = "#aaa";
        overlay.style.padding = "3px";
        overlay.style.fontSize = "11px";
        overlay.style.position = "fixed";
        overlay.style.margin = "7px 7px 0 0";
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        overlay.style.border = "solid 2px rgba(255, 255, 255, 0.2)";
        
        overlay.innerHTML = `Page URL: <b>${url}</b>`;
        
        return document.body.appendChild(overlay);
    },
    
    setUrl: function(href) {
        let overlay = this.getOverlay();
        let url = this.isSet(href, this.isSet(this.url, window.location.href));
        
        overlay.innerHTML = `Page URL: <b>${url}</b>`;
    }
};