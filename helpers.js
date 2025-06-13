export const showError = (message) => {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    errorElement.style.position = 'fixed';
    errorElement.style.bottom = '20px';
    errorElement.style.left = '50%';
    errorElement.style.transform = 'translateX(-50%)';
    errorElement.style.backgroundColor = '#dc3545';
    errorElement.style.color = 'white';
    errorElement.style.padding = '10px 20px';
    errorElement.style.borderRadius = '4px';
    errorElement.style.zIndex = '1000';
    errorElement.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s forwards';
    
    document.body.appendChild(errorElement);
    
    setTimeout(() => {
      errorElement.remove();
    }, 3000);
  };
  
  export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };