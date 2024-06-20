document.addEventListener('DOMContentLoaded', () => {
    const serviceSections = document.querySelectorAll('.service-section');
    serviceSections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.2}s`;
    });
  });
  