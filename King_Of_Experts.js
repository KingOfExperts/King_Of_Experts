document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('year').textContent = new Date().getFullYear();

  // Particles
  const particleLayer = document.querySelector('.particles');
  const COUNT = 70;
  for (let p = 0; p < COUNT; p++) {
    const dot = document.createElement('i');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.animationDelay = Math.random() * 10 + 's';
    dot.style.animationDuration = (10 + Math.random() * 20) + 's';
    dot.style.opacity = 0.15 + Math.random() * 0.5;
    dot.style.transform = `translateY(${Math.random() * 100}vh)`;
    particleLayer.appendChild(dot);
  }

  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'grid';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});