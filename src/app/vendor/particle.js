function fn() {
    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
} 

document.addEventListener('DOMContentLoaded', fn, false);