export const showError = (message) => {
  const toast = document.createElement('div');
  toast.className = 'error-toast';
  toast.innerHTML = `
    <span>⚠️ ${message}</span>
    <button class="close-btn">&times;</button>
  `;
  
  // Styling
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#f72585';
  toast.style.color = 'white';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '4px';
  toast.style.zIndex = '1000';
  toast.style.display = 'flex';
  toast.style.gap = '10px';
  toast.style.alignItems = 'center';

  // Animasi
  toast.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s forwards';

  // Close button
  toast.querySelector('.close-btn').addEventListener('click', () => {
    toast.remove();
  });

  document.body.appendChild(toast);
};