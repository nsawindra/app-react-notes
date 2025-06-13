class NotesApp {
  constructor() {
    // Cek keberadaan elemen
    this.loadingIndicator = document.getElementById('loading-indicator');
    
    if (!this.loadingIndicator) {
      this.createFallbackLoader();
      console.warn('Using fallback loading indicator');
    }
    
    this.init();
  }

  createFallbackLoader() {
    const fallback = document.createElement('div');
    fallback.id = 'loading-fallback';
    fallback.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 1000;
      display: none;
    `;
    fallback.textContent = 'Loading...';
    document.body.appendChild(fallback);
    
    this.loadingIndicator = {
      show: () => fallback.style.display = 'block',
      hide: () => fallback.style.display = 'none'
    };
  }

  showLoading() {
    try {
      this.loadingIndicator?.show(); // Gunakan optional chaining
    } catch (error) {
      console.error('Failed to show loading:', error);
    }
  }
  // ... metode lainnya tetap sama
}