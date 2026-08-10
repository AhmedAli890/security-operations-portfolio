document.getElementById('year').textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('.nav nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      links.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav nav a[href="#${entry.target.id}"]`);
      if(active) active.style.color = 'var(--accent)';
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s => observer.observe(s));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
