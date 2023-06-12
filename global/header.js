
// Define Global Header Class
class HTML_Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header"> 
			<nav class="header">
            	<ul class="header">
               		<li class="header"><a class="header" href="index.html">Home</a></li>
               		<li class="header"><a class="header" href="../contact/contact.html">Contact</a></li>
               		<li class="header" style="float:right"><a class="header" href="../games/games.html">Games</a></li>
            	</ul>
			</nav>
        </header>
        `;
    }
}

// Register Class to HTML
customElements.define("global-header", HTML_Header);