/* ==========================================================================
   Selector de idioma ES / EN
   - El HTML trae el texto en español (idioma por defecto y para SEO).
   - Al cargar se guarda ese texto original; el inglés vive en EN.
   - Marcadores: data-i18n (texto), data-i18n-aria (aria-label), data-i18n-alt (alt).
   - Cambia <html lang>, el <title>, la meta description y aria-pressed.
   - La elección se recuerda en localStorage (si el navegador lo permite).
   ========================================================================== */
(() => {
  const EN = {
    // Navegación y comunes
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_experience: "Background",
    nav_about: "About",
    nav_contact: "Contact",
    menu_write: "Email me",
    new_tab: "(opens in a new tab)",
    skip: "Skip to content",
    logo_label: "EC, Emanuel Cabrera: go to top",
    nav_label: "Main",
    lang_label: "Language",
    footer_nav_label: "Footer",
    social_label: "Social",
    tools_label: "Tools",
    footer_credit: "Built with HTML and CSS · Designed in Figma",
    back_to: "Back to ",
    back_projects: "Back to projects",
    next_project: "Next project",
    case_study: "Case study",
    result: "Result",
    learning: "Learning",

    // Hero
    hero_label: "Introduction",
    hero_role: "Junior front-end developer with a UX/UI background",
    hero_pitch: "I build HTML and CSS sites that make sense in 30 seconds, work with a keyboard and load fast.",
    cta_projects: "See projects",
    cta_contact: "Get in touch",
    hero_available: "Open to internships",
    metrics_title: "Highlights in numbers",
    metric_cases: "case studies",
    metric_years: "years of studies",
    metric_tools: "tools",
    metric_courses: "courses",

    // Proyectos
    projects_title: "Projects",
    projects_intro: "Three university projects, told as case studies: problem, process, solution and result.",
    p1_title: "Redesigning the library app",
    p1_desc: "Finding and booking a book took too many steps. I interviewed students, redesigned the flow in Figma and validated it with a usability test.",
    p1_result: "38% → 91% task completion",
    p1_alt: "Illustrative mockup of the library app: a book list with search and a detail screen with the Book button.",
    tag_interviews: "Interviews",
    tag_usability: "Usability testing",
    read_case: "Read case study",
    p2_title: "Design system for an online store",
    p2_desc: "Color palette, type scale and 12 documented components.",
    p2_result: "Name tokens by their role, not by their color",
    p2_alt: "Illustrative mockup of the design system: color swatches, an Aa type specimen and three button variants.",
    tag_variables: "Variables",
    tag_components: "Components",
    view_figma: "View in Figma",
    p3_title: "Accessible landing page in HTML and CSS",
    p3_desc: "Semantic, mobile-first markup that works with a keyboard.",
    p3_result: "Lighthouse mobile 98–100 across all 4 metrics",
    p3_alt: "Illustrative mockup of a landing page in the browser with Lighthouse mobile scores: 98, 100, 100 and 100.",
    view_demo: "View demo",

    // Skills
    skills_intro: "What I use to go from an idea to a published site.",
    s1_title: "UX design",
    s1_desc: "Interviews, journey maps, wireframes and usability tests.",
    s2_title: "UI design",
    s2_desc: "Design systems, type scales and components with states.",
    s3_desc: "Semantic HTML, responsive CSS and WCAG 2.2 AA accessibility.",
    s4_title: "Workflow",
    s4_desc: "Version control, review and continuous publishing.",

    // Recorrido
    experience_intro: "Education, courses and volunteering.",
    today: "present",
    t1_role: "B.Sc. in Information Systems",
    t1_a: "UX-UI Design 2026: portfolio with a full process, from research to deploy",
    t1_b: "UX/UI coursework presented as case studies",
    t2_role: "UX/UI design course",
    t2_org: "Platform [placeholder]",
    t2_a: "Two final projects passed",
    t2_b: "First design system in Figma",
    t3_role: "Volunteering: website for an NGO",
    t3_org: "Organization [placeholder]",
    t3_a: "Responsive build of the institutional site",
    t3_b: "Published and maintained on GitHub Pages",

    // Sobre mí
    about_bio: "I study Information Systems and focus on the part that touches people: the interface. I like what I build to be understood quickly, usable without a mouse and fast on any connection.",
    about_alt: "Illustration with the initials EC over a synthwave sun setting on a magenta grid horizon.",
    principles_title: "Working principles",
    pr1_title: "Clarity over decoration",
    pr1_desc: "Every screen answers a user's question.",
    pr2_title: "Accessible from the first commit",
    pr2_desc: "Keyboard, contrast and focus are designed in, not added at the end.",
    pr3_title: "Test with people",
    pr3_desc: "Decisions are validated with tests, not opinions.",

    // Contacto
    contact_title: "Let’s talk.",
    contact_lead: "Hiring or have a project? I reply within 48 hours.",

    // Caso de estudio
    case_lead: "Finding and booking a book took seven steps. I interviewed students, redesigned the flow in Figma and validated it with a usability test.",
    fact_role: "Role",
    fact_role_v: "UX/UI design (solo)",
    fact_duration: "Duration",
    fact_duration_v: "6 weeks",
    fact_team: "Team",
    fact_team_v: "Individual project, UX-UI course",
    case_mockup_alt: "Before and after: on the left, the original menu with seven stacked options; on the right, the new list with search, visible availability and a three-tab bottom bar.",
    case_caption: "Before: 7 steps · After: 3 steps. Illustrative mockup.",
    case_problem: "The problem",
    case_problem_text: "Booking a book in the university library app took seven screens, with menus that repeated options. In the initial observation, 6 out of 10 students gave up before finishing.",
    case_process: "Process",
    step1_title: "1 · Interviews",
    step1_text: "5 students from different years. What they repeated most: “I don’t know where my booking is” and “I don’t know if the book is available”.",
    step2_title: "2 · Journey map",
    step2_text: "The flow mixed catalog, account and rules in a single menu. Three steps were redundant.",
    step3_title: "3 · Prototype and test",
    step3_text: "Figma prototype tested with 5 people. Tasks: “book a title” and “find your active booking”.",
    case_solution: "Solution",
    case_solution_text: "A bottom bar with three destinations (Catalog, Bookings, Account), always-visible search and availability inside each result. Booking went from seven steps to three.",
    before: "Before",
    before_text: "7-option menu, availability only on the detail screen.",
    after: "After",
    after_text: "3 destinations, availability in the list, booking in 3 steps.",
    r1_label: "task completion",
    r2_label: "steps to book",
    r3_label: "participants found their booking",
    r3_value: "5 of 5",
    case_note: "Illustrative values from the coursework [placeholder: replace with the real test results].",
    case_learnings: "Learnings",
    l1_title: "Measure before redesigning",
    l1_text: "Without the initial observation data I couldn’t have shown the improvement.",
    l2_title: "Fewer options, more clarity",
    l2_text: "Trimming the menu helped more than any visual change.",
    l3_title: "What I’d do differently",
    l3_text: "Test with students who use screen readers from the first iteration.",

    // 404
    nf_title: "Lost beyond the horizon.",
    nf_text: "This page doesn’t exist or was moved. The rest of the portfolio is still here.",
    nf_home: "Back to home",
  };

  const META_EN = {
    home: {
      title: "Emanuel Cabrera · Junior front-end developer with a UX/UI background",
      description: "Portfolio of Emanuel Cabrera, junior front-end developer with a UX/UI background. Case studies, skills, background and contact.",
    },
    case: {
      title: "Case study: redesigning the library app · Emanuel Cabrera",
      description: "UX/UI case study by Emanuel Cabrera: how booking a book went from seven steps to three.",
    },
    notfound: {
      title: "Page not found · Emanuel Cabrera",
      description: "This page doesn’t exist. Go back to Emanuel Cabrera’s portfolio.",
    },
  };

  const MENU_EN = { open: "Open menu", close: "Close menu" };

  const html = document.documentElement;
  const page = document.body.dataset.page || "home";
  const metaDescription = document.querySelector('meta[name="description"]');

  // Guardar el español original de cada elemento marcado
  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const ariaNodes = Array.from(document.querySelectorAll("[data-i18n-aria]"));
  const altNodes = Array.from(document.querySelectorAll("[data-i18n-alt]"));
  textNodes.forEach((el) => (el.dataset.i18nEs = el.textContent));
  ariaNodes.forEach((el) => (el.dataset.i18nAriaEs = el.getAttribute("aria-label") || ""));
  altNodes.forEach((el) => (el.dataset.i18nAltEs = el.getAttribute("alt") || ""));

  const ES_META = { title: document.title, description: metaDescription?.content || "" };
  const toggle = document.querySelector(".menu-toggle");
  const MENU_ES = toggle ? { open: toggle.dataset.labelOpen, close: toggle.dataset.labelClose } : null;

  function apply(lang) {
    const en = lang === "en";

    textNodes.forEach((el) => {
      const value = en ? EN[el.dataset.i18n] : el.dataset.i18nEs;
      if (value !== undefined) el.textContent = value;
    });
    ariaNodes.forEach((el) => {
      const value = en ? EN[el.dataset.i18nAria] : el.dataset.i18nAriaEs;
      if (value !== undefined) el.setAttribute("aria-label", value);
    });
    altNodes.forEach((el) => {
      const value = en ? EN[el.dataset.i18nAlt] : el.dataset.i18nAltEs;
      if (value !== undefined) el.setAttribute("alt", value);
    });

    const meta = en ? META_EN[page] : ES_META;
    if (meta) {
      document.title = meta.title;
      if (metaDescription) metaDescription.content = meta.description;
    }

    if (toggle && MENU_ES) {
      const labels = en ? MENU_EN : MENU_ES;
      toggle.dataset.labelOpen = labels.open;
      toggle.dataset.labelClose = labels.close;
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", expanded ? labels.close : labels.open);
    }

    html.lang = en ? "en" : "es";
    document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  function save(lang) {
    try {
      localStorage.setItem("lang", lang);
    } catch (_) {
      /* almacenamiento bloqueado: el idioma vale solo para esta visita */
    }
  }

  function load() {
    try {
      return localStorage.getItem("lang");
    } catch (_) {
      return null;
    }
  }

  document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      apply(btn.dataset.lang);
      save(btn.dataset.lang);
    });
  });

  if (load() === "en") apply("en");
})();
