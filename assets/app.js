// ===== helpers =====
const $ = (sel) => document.querySelector(sel);

function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const btn = $("#themeBtn");
  if (btn) btn.textContent = theme === "light" ? "☀️" : "🌙";
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    applyTheme("dark");
  }

  const btn = $("#themeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  }
}

function openDrawer() {
  document.body.classList.add("drawerOpen");
}

function closeDrawer() {
  document.body.classList.remove("drawerOpen");
}

function initDrawer() {
  const openBtn = $("#hamburgerBtn");
  const closeBtn = $("#drawerCloseBtn");
  const overlay = $("#drawerOverlay");
  const drawer = $("#drawer");

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  // ESC to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  // Close drawer when clicking any link inside
  if (drawer) {
    drawer.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeDrawer();
    });
  }
}

// ===== boot =====
setYear();
initTheme();
initDrawer();
