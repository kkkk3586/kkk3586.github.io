document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    });
  });

  const updateParallax = () => {
    const offset = Math.min(window.scrollY * -0.24, 220);
    document.body.style.setProperty('--parallax-offset', `${offset}px`);
  };

  updateParallax();
  window.addEventListener('scroll', updateParallax, { passive: true });
});
