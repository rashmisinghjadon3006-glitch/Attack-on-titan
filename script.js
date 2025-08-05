// Parallax effect
window.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.layer');
  layers.forEach(layer => {
    const depth = layer.getAttribute('data-depth');
    const movement = -window.scrollY * depth;
    layer.style.transform = `translateY(${movement}px)`;
  });

  // Titan roar trigger
  const roarSection = document.querySelector('[data-roar="true"]');
  if (roarSection) {
    const rect = roarSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !roarSection.classList.contains('roared')) {
      document.getElementById('titan-roar').play();
      roarSection.classList.add('roared');
    }
  }
});

// Hover SFX for characters
document.querySelectorAll('.char-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const sfx = new Audio(`assets/${card.getAttribute('data-sfx')}`);
    sfx.play();
  });
});
