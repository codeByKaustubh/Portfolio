document.querySelectorAll('.project-image').forEach((card) => {
  const preview = card.querySelector('img');
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    card.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(8px)`;
    preview.style.transform = `scale(1.055) translateX(${x * -8}px) translateY(${y * -8}px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
    preview.style.transform = '';
  });
});
