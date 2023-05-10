
// Define Global Header Class
class HTML_Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            header {
                background-color: "red"
            }
            li
        
        </style>
        <header> 
            <ul>
               <li><a href="index.html">Home</a></li>
               <li><a href="index.html">About</a></li>
               <li><a href="index.html">Test</a></li>
            </ul>
        </header>
        `;
    }
}

// Register Class to HTML
customElements.define("global-header", HTML_Header);