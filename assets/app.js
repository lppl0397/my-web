(function(){
  const root = document.documentElement;

  // Theme
  const themeBtn = document.getElementById('themeBtn');
  const saved = localStorage.getItem('theme');

  function applyTheme(t){
    root.setAttribute('data-theme', t);
    if(themeBtn) themeBtn.textContent = (t === 'light') ? '🌞' : '🌙';
  }

  applyTheme(saved || 'dark');

  if(themeBtn){
    themeBtn.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', cur);
      applyTheme(cur);
    });
  }

  // Year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Active menu
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page') === path) a.classList.add('active');
  });

  // Drawer (hamburger)
  const hamBtn = document.getElementById('hamburgerBtn');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerCloseBtn');

  function openDrawer(){ document.body.classList.add('drawerOpen'); }
  function closeDrawer(){ document.body.classList.remove('drawerOpen'); }

  if(hamBtn) hamBtn.addEventListener('click', openDrawer);
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if(overlay) overlay.addEventListener('click', closeDrawer);

  // Close on ESC
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeDrawer();
  });

  // Close drawer when clicking any drawer link
  document.querySelectorAll('.drawerNav a').forEach(a=>{
    a.addEventListener('click', closeDrawer);
  });
})();
