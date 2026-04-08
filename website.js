(() => {
  const navKey = document.body?.dataset.siteNav;
  if (navKey) {
    document.querySelectorAll("[data-nav-item]").forEach((link) => {
      if (link.dataset.navItem === navKey) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = currentYear;
  });
})();
