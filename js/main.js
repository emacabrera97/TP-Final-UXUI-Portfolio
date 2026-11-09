/* ==========================================================================
   Portfolio — interacción mínima en JavaScript vanilla
   1. Menú mobile accesible (aria-expanded, Esc, foco atrapado, bloqueo de scroll)
   2. Link activo según la sección visible
   3. Año del footer
   ========================================================================== */
(() => {
  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  const desktopQuery = window.matchMedia("(min-width: 64em)");

  /* ------------------------------------------------------------------------
     1. Menú mobile
     ------------------------------------------------------------------------ */
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.getElementById("menu");
  const header = document.querySelector(".site-header");

  const isOpen = () => toggle?.getAttribute("aria-expanded") === "true";

  const focusables = () =>
    Array.from(
      header.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden");

  function setMenu(open, { returnFocus = true } = {}) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? toggle.dataset.labelClose : toggle.dataset.labelOpen);
    panel.classList.toggle("is-open", open);
    document.body.classList.toggle("is-locked", open);

    if (open) {
      const first = panel.querySelector("a[href]");
      // Espera al cambio de visibilidad antes de mover el foco
      requestAnimationFrame(() => first?.focus());
    } else if (returnFocus) {
      toggle.focus();
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", () => setMenu(!isOpen()));

    // Cerrar al elegir un destino del menú
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a[href]") && isOpen()) setMenu(false, { returnFocus: false });
    });

    document.addEventListener("keydown", (event) => {
      if (!isOpen()) return;

      if (event.key === "Escape") {
        event.preventDefault();
        setMenu(false);
        return;
      }

      // Mantener el foco dentro del header mientras el menú está abierto
      if (event.key === "Tab") {
        const items = focusables();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    // Si se pasa a desktop con el menú abierto, se cierra sin mover el foco
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches && isOpen()) setMenu(false, { returnFocus: false });
    });
  }

  /* ------------------------------------------------------------------------
     2. Link activo: marca en magenta la sección visible
     ------------------------------------------------------------------------ */
  const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Franja horizontal en el tercio superior del viewport
      { rootMargin: "-35% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Arriba de todo (hero) no hay link activo
    const hero = document.getElementById("inicio");
    if (hero) {
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive("");
        },
        { rootMargin: "-35% 0px -60% 0px" }
      ).observe(hero);
    }
  }

  /* ------------------------------------------------------------------------
     3. Año del footer
     ------------------------------------------------------------------------ */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
