(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.nav-toggle');
  const setMenu = (open) => { root.classList.toggle('menu-open', open); toggle.setAttribute('aria-expanded', open); };
  const closeSubs = (except) => document.querySelectorAll('.has-sub.open').forEach((li) => {
    if (li !== except) { li.classList.remove('open'); li.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false'); }
  });

  toggle.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  document.querySelector('[data-scrim]').addEventListener('click', () => setMenu(false));

  document.querySelectorAll('.sub-toggle').forEach((btn) => btn.addEventListener('click', () => {
    const li = btn.parentElement, open = !li.classList.contains('open');
    closeSubs(li); li.classList.toggle('open', open); btn.setAttribute('aria-expanded', open);
  }));
  document.addEventListener('click', (e) => { if (!e.target.closest('.has-sub')) closeSubs(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSubs(); setMenu(false); } });

  const onScroll = () => root.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
