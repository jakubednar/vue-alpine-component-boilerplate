import Alpine from 'alpinejs';
window.Alpine = Alpine;
document.addEventListener('alpine:init', () => {
  console.log('Alpine started');
  window.Alpine.data('testData', () => {
    return {
      count: 0,
    };
  });
});
Alpine.start();
