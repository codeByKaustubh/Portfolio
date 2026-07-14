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

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.stats > div').forEach((stat) => {
    stat.addEventListener('pointermove', (event) => {
      const bounds = stat.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      stat.style.transform = `rotateX(${-y * 13}deg) rotateY(${x * 13}deg) translateZ(12px)`;
    });
    stat.addEventListener('pointerleave', () => { stat.style.transform = ''; });
  });

  const contact = document.querySelector('.contact');
  contact.addEventListener('pointermove', (event) => {
    const bounds = contact.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5);
    const y = ((event.clientY - bounds.top) / bounds.height - .5);
    contact.style.setProperty('--contact-x', `${x * 22}px`);
    contact.style.setProperty('--contact-y', `${y * 18}px`);
    contact.style.setProperty('--contact-title-x', `${x * 10}px`);
    contact.style.setProperty('--contact-title-y', `${y * 7}px`);
    contact.style.setProperty('--contact-email-x', `${x * -16}px`);
    contact.style.setProperty('--contact-email-y', `${y * -11}px`);
    contact.style.setProperty('--contact-details-x', `${x * 6}px`);
    contact.style.setProperty('--contact-details-y', `${y * 5}px`);
  });
  contact.addEventListener('pointerleave', () => {
    contact.style.setProperty('--contact-x', '0px');
    contact.style.setProperty('--contact-y', '0px');
    contact.style.setProperty('--contact-title-x', '0px');
    contact.style.setProperty('--contact-title-y', '0px');
    contact.style.setProperty('--contact-email-x', '0px');
    contact.style.setProperty('--contact-email-y', '0px');
    contact.style.setProperty('--contact-details-x', '0px');
    contact.style.setProperty('--contact-details-y', '0px');
  });

  document.querySelectorAll('.skill-list > div').forEach((row) => {
    row.addEventListener('pointermove', (event) => {
      const bounds = row.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      row.style.transform = `rotateX(${-y * 4}deg) rotateY(${x * 3}deg) translateZ(10px)`;
    });
    row.addEventListener('pointerleave', () => { row.style.transform = ''; });
  });

  const orbitalWrap = document.querySelector('.orbital-wrap');
  orbitalWrap.addEventListener('pointermove', (event) => {
    const bounds = orbitalWrap.getBoundingClientRect();
    orbitalWrap.style.setProperty('--orbit-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 18}px`);
    orbitalWrap.style.setProperty('--orbit-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 18}px`);
  });
  orbitalWrap.addEventListener('pointerleave', () => {
    orbitalWrap.style.setProperty('--orbit-x', '0px');
    orbitalWrap.style.setProperty('--orbit-y', '0px');
  });

  const about = document.querySelector('.about');
  about.addEventListener('pointermove', (event) => {
    const bounds = about.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    about.style.setProperty('--about-label-x', `${x * -12}px`);
    about.style.setProperty('--about-label-y', `${y * -8}px`);
    about.style.setProperty('--about-copy-x', `${x * 15}px`);
    about.style.setProperty('--about-copy-y', `${y * 10}px`);
    about.style.setProperty('--about-cube-x', `${x * -28}px`);
    about.style.setProperty('--about-cube-y', `${y * -20}px`);
  });
  about.addEventListener('pointerleave', () => {
    ['--about-label-x', '--about-label-y', '--about-copy-x', '--about-copy-y', '--about-cube-x', '--about-cube-y'].forEach((property) => about.style.setProperty(property, '0px'));
  });
}
