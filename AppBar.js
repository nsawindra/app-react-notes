class AppBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            background-color: #4361ee;
            color: white;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          
          .app-title {
            font-size: 1.5rem;
            text-align: center;
            margin: 0;
          }
        </style>
        <header class="app-bar">
          <h1 class="app-title">Notes App</h1>
        </header>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);