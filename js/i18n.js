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
    metric_cases: "UX/UI projects",
    metric_years: "course completed (CS50P)",
    metric_tools: "languages",
    metric_courses: "GitHub repos",

    // Proyectos
    projects_title: "Projects",
    projects_intro: "Three university projects. The first one is told as a case study: problem, process, solution and result.",
    p1_title: "Cubrí Seguros: digital phone insurance sign-up",
    p1_desc: "A four-step checkout (quote, pick a plan, enter details and pay) built from the Figma design provided by the course.",
    p1_result: "Complete flow with validation and saved progress",
    p1_alt: "Cubrí Seguros mobile screenshots: the Pick your plan screen with three plans and the card payment screen.",
    tag_interviews: "Interviews",
    tag_usability: "Usability testing",
    read_case: "Read case study",
    p2_title: "Coffea: landing page in HTML and CSS",
    p2_desc: "Landing page for a fictional coffee shop with a carousel, mobile menu and favorites built without JavaScript.",
    p2_result: "HTML and CSS only, with tokens and CSS layers",
    p2_alt: "Coffea landing page hero: a cup of coffee with beans and the headline We serve the best coffee in town.",
    tag_variables: "Variables",
    tag_components: "Components",
    view_figma: "View in Figma",
    p3_title: "20 HTML and CSS exercises",
    p3_desc: "From basic HTML structure to flexbox, positioning and @keyframes animations, ending in an integrating landing page.",
    p3_result: "An integrating landing page with everything practiced",
    p3_alt: "Mi Negocio landing page hero with the headline We help your business grow and a Contact us button.",
    view_demo: "View demo",

    // Skills
    skills_intro: "What I use to go from an idea to a published site.",
    s1_title: "UX design",
    s1_desc: "Information architecture, wireframes and prototypes.",
    s2_title: "UI design",
    s2_desc: "Design systems, type scales and components with states.",
    s3_desc: "Semantic HTML, responsive CSS and WCAG 2.2 AA accessibility.",
    s4_title: "Workflow",
    s4_desc: "Version control, continuous publishing and the languages used at university.",

    // Recorrido
    experience_intro: "Education and courses.",
    today: "present",
    t1_role: "B.Sc. in Information Systems",
    t1_a: "Programming courses: Algorithms and Data Structures, and Object-Oriented Programming",
    t1_b: "UX-UI Design 2026: three coursework projects published on GitHub",
    t2_role: "CS50P: Introduction to Programming with Python",
    t2_org: "CS50 · Harvard University",
    t2_a: "Full Python programming course",
    t2_b: "[add: certificate or final project]",
    t3_role: "UX/UI course projects",
    t3_org: "FCyT · UADER",
    t3_a: "Cubrí Seguros: checkout with validation and persistent state",
    t3_b: "Coffea: landing page in HTML and CSS without JavaScript",

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
    case_lead: "A four-step checkout (quote, pick a plan, enter details and pay) built from the Figma design provided by the course.",
    fact_role: "Role",
    fact_role_v: "Front-end development on a provided design",
    fact_duration: "Context",
    fact_duration_v: "Assignment 5, UX-UI Design 2026 · FCyT-UADER",
    fact_team: "Team",
    fact_team_v: "Individual project",
    case_mockup_alt: "Cubrí Seguros: Pick your plan and Payment screens. Three plans (Basic, recommended Plus and Premium) with their monthly fee, and the card payment form.",
    case_caption: "Pick your plan screen (on mobile, next to the payment screen).",
    case_problem: "The problem",
    case_problem_text: "The assignment asks to build the sign-up flow for phone insurance from a Figma design: get a quote, choose a plan, enter details, pay and receive a policy number. It involves money and personal data, so it cannot be confusing: every step has to say what is missing, explain errors and prevent paying twice.",
    case_process: "Process",
    step1_title: "1 · A single state",
    step1_text: "All the flow information lives in one object, and the screen only shows what that state says. That is why Back never loses the data already entered.",
    step2_title: "2 · Business rules and validation",
    step2_text: "The fee is calculated from the device value, the plan yearly rate and an age factor. Each validation is a pure function that returns the error message or nothing.",
    step3_title: "3 · Test cases",
    step3_text: "I tested fees with concrete values and payment with test cards: one approved, one declined and any other 16-digit number.",
    case_solution: "Solution",
    case_solution_text: "A single step-by-step flow with the summary always in view and three decisions designed to prevent mistakes.",
    before: "Before",
    before_text: "7-option menu, availability only on the detail screen.",
    after: "After",
    after_text: "3 destinations, availability in the list, booking in 3 steps.",
    r1_label: "sign-up steps",
    r2_label: "plans with calculated fee",
    r3_label: "bonus: saved progress and input masks",
    r3_value: "5 of 5",
    case_note: "This is coursework: there are no real usage metrics or user testing. Progress is saved without the card number, expiry date or CVV.",
    case_learnings: "Learnings",
    l1_title: "A single source of truth",
    l1_text: "One function calculates the fee, so the price on the cards and in the summary cannot differ.",
    l2_title: "Explain before blocking",
    l2_text: "A disabled button without explanation frustrates; saying what is missing saves the person an attempt.",
    l3_title: "Protect sensitive data",
    l3_text: "Browser storage is not protected, so it never keeps the card data.",

    // Contenido nuevo
    view_repo: "View repository",
    view_live: "View the live site",
    ongoing: "Ongoing",
    t2_period: "[add year]",
    sol1_title: "Buttons",
    sol1_text: "They enable when the step is valid and say what is missing: Still to complete: …",
    sol2_title: "Errors",
    sol2_text: "They appear when leaving a field; when moving on, focus goes to the first invalid field.",
    sol3_title: "Payment",
    sol3_text: "The button changes to Processing… and locks to prevent double payment.",

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
      title: "Case study: Cubrí Seguros, digital phone insurance sign-up · Emanuel Cabrera",
      description: "Case study by Emanuel Cabrera: a four-step checkout to buy phone insurance, with validation and saved progress.",
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
