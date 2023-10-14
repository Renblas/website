// Define Global Header Class
class HTML_Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer"> 

        </footer>
        `;
    }
}

// Register Class to HTML
customElements.define("global-footer", HTML_Footer);