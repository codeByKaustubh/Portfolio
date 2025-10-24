// script.js

// ---------- Helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// ---------- Data
const PROJECTS = [
  {id:1,title:'DabbeWale',desc:'A project focused on the traditional Indian lunchbox delivery system, often involving a web or mobile interface for ordering and tracking.',tags:['web'],links:{live:'https://dabbewale.netlify.app/',code:'#'}},
  {id:2,title:'CrazyType',desc:'A fun and engaging typing game designed to improve typing speed and accuracy through interactive challenges.',tags:['web','game'],links:{live:'https://crazytype.netlify.app/',code:'#'}},
];

// ---------- Projects rendering
function renderProjects() {
  const grid = $('#projectsGrid');
  grid.innerHTML = '';
  for (const p of PROJECTS) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<div class="tag">${t}</div>`).join('')}</div>
      <div style="margin-top:10px;display:flex;gap:8px">
        <button class="btn" data-id="${p.id}" aria-expanded="false">Details</button>
        <a class="btn" href="${p.links.live}" target="_blank">Live</a>
      </div>
    `;
    grid.appendChild(card);
  }
}

document.addEventListener('click', e => {
  const btn = e.target.closest('button[data-id]');
  if (btn) {
    const id = Number(btn.dataset.id);
    openModal(id);
  }
});

// ---------- Modal
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  $('#modalContent').innerHTML = `
    <h2 style="margin-top:0">${p.title}</h2>
    <p class="muted">${p.desc}</p>
    <div style="margin-top:12px">Tags: ${p.tags.map(t => `<span class='tag'>${t}</span>`).join(' ')}</div>
    <div style="margin-top:12px;display:flex;gap:8px"><a class='btn' href='${p.links.live}'>Live</a></div>
  `;
  $('#modal').classList.add('open');
}

$('#modal').addEventListener('click', e => { if (e.target === $('#modal')) $('#modal').classList.remove('open'); });

// ---------- Utilities
$('#copyEmail').addEventListener('click', () => {
  const emailButton = $('#copyEmail');
  // Your email address
  navigator.clipboard?.writeText('kaustubhrane2005@gmail.com').then(() => {
    emailButton.textContent = 'Copied!';
    setTimeout(() => {
      emailButton.textContent = 'Copy email';
    }, 2000); // Revert text after 2 seconds
  });
});

$('#themeToggle').addEventListener('click', () => {
  if (document.documentElement.hasAttribute('data-theme')) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

// Initial render of projects
renderProjects();