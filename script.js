// Smooth scrolling for full-page sections
document.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY;
  const sections = document.querySelectorAll('.fullpage-section');
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      currentSectionIndex = index;
    }
  });

  let targetSection;
  if (delta > 0 && currentSectionIndex < sections.length - 1) {
    // Scroll down
    targetSection = sections[currentSectionIndex + 1];
  } else if (delta < 0 && currentSectionIndex > 0) {
    // Scroll up
    targetSection = sections[currentSectionIndex - 1];
  }

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Add 3D hover effects
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = (x - centerX) / 10;
    const rotateX = (centerY - y) / 10;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.1)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
  });
});