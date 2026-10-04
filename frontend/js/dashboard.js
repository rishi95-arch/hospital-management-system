const dashboardDate = document.querySelector('#dashboard-date');
const sidebar = document.querySelector('#dashboard-sidebar');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const sidebarScrim = document.querySelector('#sidebar-scrim');

if (dashboardDate) {
  dashboardDate.textContent = new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date());
}

function setSidebarOpen(isOpen) {
  if (!sidebar || !sidebarToggle || !sidebarScrim) return;

  sidebar.classList.toggle('is-open', isOpen);
  sidebarScrim.classList.toggle('is-visible', isOpen);
  sidebarToggle.setAttribute('aria-expanded', String(isOpen));
  sidebarToggle.setAttribute('aria-label', isOpen ? 'Close dashboard navigation' : 'Open dashboard navigation');
}

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebarToggle.getAttribute('aria-expanded') === 'true';
    setSidebarOpen(!isOpen);
  });
}

if (sidebarScrim) {
  sidebarScrim.addEventListener('click', () => setSidebarOpen(false));
}

if (sidebar) {
  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setSidebarOpen(false));
  });
}
