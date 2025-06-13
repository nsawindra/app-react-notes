class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
          display: none;
        }
        :host([active]) {
          display: block;
        }
        .spinner {
          border: 4px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          border-top: 4px solid #4361ee;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      <div class="spinner"></div>
    `;
  }

  show() {
    this.setAttribute('active', '');
  }

  hide() {
    this.removeAttribute('active');
  }
}

// Register dengan nama yang sama dengan HTML
customElements.define('loading-indicator', LoadingIndicator);