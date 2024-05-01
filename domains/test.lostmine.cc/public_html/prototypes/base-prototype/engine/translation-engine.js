const defaultLanguageCode = 'en';
const defaultLanguageOverlayFontSize = '14px';
const defaultLanguageOverlayElementId = 'language-overlay';

window.addEventListener("load", function() {
    LanguageBox.createOverlay();
    LanguageBox.translateDocument(LanguageBox.getLanguage());
});

const LanguageBox = {
    id: defaultLanguageOverlayElementId,
    languages: {
        "en": "English",
        "pl": "polski",
        "de": "Deutsch",
        "es": "Español",
        "fr": "Français",
        "it": "Italiano",
        "sx": "ślōnskŏ gŏdka",
        "hi": "हिन्दी",
        "uk": "Українська",
        "iw": "שפה עברית"
    },
    
    isSet: function (variable, def = false) {
        if (typeof variable === 'string') {
            return (variable.trim() !== '') ? variable : def;
        } else if (typeof variable === 'object') {
            return variable
        } else return def;
    },
    
    getId() {
        return this.isSet(this.id, defaultLanguageOverlayElementId);
    },
    
    getLanguage() {
        return window.localStorage.getItem("language") || defaultLanguageCode;
    },

    getOverlay: function() {
        let overlay = document.getElementById(this.getId());
        
        return this.isSet(overlay) ? overlay : this.createOverlay();
    },
    
    createOverlay: function() {
        let style = "direction: ltr;";
        let overlay = document.createElement("div");
        let select = document.createElement("select");
        
        overlay.id = this.getId();
        
        overlay.style.left = "0";
        overlay.style.bottom = "0";
        overlay.style.color = "#aaa";
        overlay.style.padding = "3px";
        overlay.style.position = "fixed";
        overlay.style.margin = "0 0 7px 7px";
        overlay.style.fontSize = defaultLanguageOverlayFontSize;
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        overlay.style.border = "solid 2px rgba(255, 255, 255, 0.2)";
        
        for (var key in this.languages) {
            if (this.languages.hasOwnProperty(key)) {
                let option = document.createElement("option");
                
                style = (key === "iw") ? "direction: rtl;" : style;
                
                option.value = key;
                option.style = style;
                option.text = this.languages[key];
                
                select.appendChild(option);
            }
        }
        
        select.id = "the-select";
        select.value = this.getLanguage();
        
        select.style.fontSize = defaultLanguageOverlayFontSize;
        
        select.addEventListener("change", this.handleChange);
        
        overlay.appendChild(select);
        document.body.appendChild(overlay);
    },
    
    handleChange: function() {
        selected = this.options[this.selectedIndex].value;

        LanguageBox.translateDocument(selected);        
        window.localStorage.setItem("language", selected);
    },
    
    translateDocument: function(language) {
        let tokenRegex = /setText\('[^']*', '([^']+)'\)/;
        let matchingNodes = document.querySelectorAll('[text]');
        let style = (language === "iw") ? "direction: rtl;" : "direction: ltr;";
        
        if (matchingNodes.length === 0) return null;
        if (typeof language === 'undefined') return null;
        if (typeof translation === 'undefined') return null;
        
        matchingNodes.forEach(function(matchingElement) {
            let match = matchingElement.getAttribute("text").match(tokenRegex);
            
            if (match) {
                let sourceText = match[1];
                let translatedText = sourceText;
                
                translatedText = (typeof translation[language] === "undefined") ? sourceText : translation[language][sourceText];
                translatedText = (typeof translatedText === "undefined" || translatedText === "") ? sourceText : translatedText;
                
                matchingElement.style = style;                
                matchingElement.textContent = translatedText;
            }
        });
    }
};