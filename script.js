// ===========================
// TRANSLATIONS
// ===========================
const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.title': 'Full Stack Developer',
    'hero.tagline': 'Building scalable SaaS, fintech & e-commerce platforms with 5+ years of experience. Focused on high-performance backends, clean architecture, and cloud infrastructure.',
    'hero.cta_contact': 'Get In Touch',
    'hero.cta_work': 'View My Work',
    'hero.cta_cv': 'Download CV',
    'hero.stat_years': 'Years Experience',
    'hero.stat_companies': 'Companies',
    'hero.stat_startup': 'Startup Founded',
    'hero.scroll': 'Scroll',

    // About
    'about.title': 'About <span class="accent">Me</span>',
    'about.p1': 'I\'m a <strong>Full Stack Developer</strong> based in Cochabamba, Bolivia, specialized in designing and optimizing high-performance back-end and front-end architectures. I work primarily with <strong>Node.js, NestJS, React, Next.js, Python</strong>, and cloud infrastructure on <strong>AWS</strong> and <strong>GCP</strong>.',
    'about.p2': 'My focus is on <strong>system performance, microservices, clean architecture</strong>, and <strong>business-impact engineering</strong>. I\'m adept at collaborating with cross-functional teams and delivering efficient, measurable technical solutions across industries including fintech, e-commerce, and enterprise SaaS.',
    'about.p3': 'Beyond my professional work, I founded <a href="https://awtu.io" target="_blank" rel="noopener noreferrer">AWTU</a> — an e-commerce platform that empowers entrepreneurs to create online stores without code.',

    // Experience
    'experience.title': 'Work <span class="accent">Experience</span>',
    'experience.cleverit.date': 'Oct 2022 — Present',
    'experience.cleverit.desc': 'Delivering SaaS and PaaS solutions that enhance development productivity across global teams.',
    'experience.cleverit.a1': 'Implemented government-regulated standards for pension, insurance, mutual fund and stock platforms, ensuring compliance across critical systems',
    'experience.cleverit.a2': 'Optimized a high-traffic endpoint, reducing processing time from <strong>8 seconds to under 1 second</strong>',
    'experience.cleverit.a3': 'Migrated legacy repositories to <strong>Angular Module Federation (microfrontends)</strong>, enabling business-area decoupling',
    'experience.cleverit.a4': 'Developed a full <strong>Stripe checkout flow</strong> in Next.js, reducing abandoned carts by 20%',
    'experience.cleverit.a5': 'Designed a <strong>RabbitMQ-based queue system</strong>, reducing GCP Cloud Run execution time by 40%',

    'experience.tekpro.date': 'Aug 2021 — Sep 2022',
    'experience.tekpro.desc': 'Integrated e-commerce solutions with platforms such as Vtex, Shopify, Magento and multiple marketplaces.',
    'experience.tekpro.a1': 'Built integrations between internal client systems and <strong>Vtex, Shopify, Mercado Libre, Amazon</strong>, enabling real-time synchronization of inventory, pricing, products and invoices',
    'experience.tekpro.a2': 'Led development of an MVP using <strong>AWS Amplify</strong> with Event-Driven Architecture, accelerating delivery time',

    'experience.banco.role': 'Software Developer',
    'experience.banco.date': 'Mar 2021 — Aug 2021',
    'experience.banco.desc': 'Developed critical banking applications during the pandemic period.',
    'experience.banco.a1': 'Designed and implemented complex <strong>performance-critical Oracle SQL</strong> queries and stored procedures to retrieve and classify delinquent debtors',
    'experience.banco.a2': 'Built a full administration panel and <strong>CMS for debtor management</strong>, enabling improved tracking and operational efficiency',

    'experience.bluegroup.role': 'Software Developer',
    'experience.bluegroup.date': 'Jan 2020 — Dec 2020',
    'experience.bluegroup.desc': 'Developed marketing-driven web applications with integrated analytics.',
    'experience.bluegroup.a1': 'Delivered e-commerce and marketing <strong>performance dashboards</strong> integrating Google Ads, Facebook Pixel and SEO metrics',
    'experience.bluegroup.a2': 'Built scalable e-commerce solutions with high product volumes for local retailers',
    'experience.bluegroup.a3': 'Implemented secure <strong>payment integration</strong> for Bolivian debit/credit cards',
    'experience.bluegroup.a4': 'Built REST APIs for synchronizing inventory, orders and products with external ERPs',

    // Skills
    'skills.title': 'Technical <span class="accent">Skills</span>',
    'skills.databases': 'Databases',
    'skills.devops': 'DevOps & Architecture',

    // Projects
    'projects.title': 'Featured <span class="accent">Project</span>',
    'projects.label': 'Startup / Founder',
    'projects.desc': 'An e-commerce platform that empowers entrepreneurs to create their online stores in minutes — <strong>no code, no commissions, no complications</strong>. Currently in its pioneer phase, AWTU helps local businesses modernize their sales with an intuitive admin panel, inventory management, order tracking, and integrated payments.',
    'projects.h1': 'Full-stack SaaS platform built from scratch',
    'projects.h2': 'Microservices architecture on Docker + Kubernetes',
    'projects.h3': 'GraphQL APIs, CI/CD pipelines, automated deployments',
    'projects.h4': 'Next.js frontend with Stripe payment integration',
    'projects.visit': 'Visit AWTU.io',

    // Education
    'education.title': 'Education',
    'education.degree': 'Telecommunications Engineer',

    // Contact
    'contact.title': 'Get In <span class="accent">Touch</span>',
    'contact.subtitle': "I'm always open to new opportunities, collaborations, or just a friendly conversation about tech. Feel free to reach out!",
    'contact.phone': 'Phone',

    // Footer
    'footer.copy': '&copy; 2026 Jose Carlos Barriga Arnez. All rights reserved.',
  },

  es: {
    // Nav
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.tagline': 'Construyendo plataformas SaaS, fintech y e-commerce escalables con más de 5 años de experiencia. Enfocado en backends de alto rendimiento, arquitectura limpia e infraestructura en la nube.',
    'hero.cta_contact': 'Contáctame',
    'hero.cta_work': 'Ver Mi Trabajo',
    'hero.cta_cv': 'Descargar CV',
    'hero.stat_years': 'Años de Experiencia',
    'hero.stat_companies': 'Empresas',
    'hero.stat_startup': 'Startup Fundada',
    'hero.scroll': 'Deslizar',

    // About
    'about.title': 'Sobre <span class="accent">Mí</span>',
    'about.p1': 'Soy un <strong>Desarrollador Full Stack</strong> con base en Cochabamba, Bolivia, especializado en diseñar y optimizar arquitecturas back-end y front-end de alto rendimiento. Trabajo principalmente con <strong>Node.js, NestJS, React, Next.js, Python</strong>, e infraestructura en la nube en <strong>AWS</strong> y <strong>GCP</strong>.',
    'about.p2': 'Mi enfoque está en el <strong>rendimiento de sistemas, microservicios, arquitectura limpia</strong> e <strong>ingeniería de impacto en el negocio</strong>. Tengo experiencia colaborando con equipos multidisciplinarios y entregando soluciones técnicas eficientes y medibles en industrias como fintech, e-commerce y SaaS empresarial.',
    'about.p3': 'Más allá de mi trabajo profesional, fundé <a href="https://awtu.io" target="_blank" rel="noopener noreferrer">AWTU</a> — una plataforma de e-commerce que permite a emprendedores crear tiendas en línea sin código.',

    // Experience
    'experience.title': 'Experiencia <span class="accent">Laboral</span>',
    'experience.cleverit.date': 'Oct 2022 — Presente',
    'experience.cleverit.desc': 'Desarrollo de soluciones SaaS y PaaS que mejoran la productividad de equipos globales.',
    'experience.cleverit.a1': 'Implementé estándares regulados por el gobierno para plataformas de pensiones, seguros, fondos mutuos y acciones, asegurando cumplimiento en sistemas críticos',
    'experience.cleverit.a2': 'Optimicé un endpoint de alto tráfico, reduciendo el tiempo de procesamiento de <strong>8 segundos a menos de 1 segundo</strong>',
    'experience.cleverit.a3': 'Migré repositorios legados a <strong>Angular Module Federation (microfrontends)</strong>, habilitando el desacoplamiento por áreas de negocio',
    'experience.cleverit.a4': 'Desarrollé un flujo completo de <strong>checkout con Stripe</strong> en Next.js, reduciendo carritos abandonados en un 20%',
    'experience.cleverit.a5': 'Diseñé un <strong>sistema de colas con RabbitMQ</strong>, reduciendo el tiempo de ejecución en GCP Cloud Run en un 40%',

    'experience.tekpro.date': 'Ago 2021 — Sep 2022',
    'experience.tekpro.desc': 'Integración de soluciones e-commerce con plataformas como Vtex, Shopify, Magento y múltiples marketplaces.',
    'experience.tekpro.a1': 'Construí integraciones entre sistemas internos y <strong>Vtex, Shopify, Mercado Libre, Amazon</strong>, habilitando sincronización en tiempo real de inventario, precios, productos y facturas',
    'experience.tekpro.a2': 'Lideré el desarrollo de un MVP usando <strong>AWS Amplify</strong> con Arquitectura Orientada a Eventos, acelerando los tiempos de entrega',

    'experience.banco.role': 'Desarrollador de Software',
    'experience.banco.date': 'Mar 2021 — Ago 2021',
    'experience.banco.desc': 'Desarrollo de aplicaciones bancarias críticas durante la pandemia.',
    'experience.banco.a1': 'Diseñé e implementé consultas <strong>Oracle SQL de alto rendimiento</strong> y procedimientos almacenados para recuperar y clasificar deudores morosos',
    'experience.banco.a2': 'Construí un panel de administración completo y un <strong>CMS para gestión de deudores</strong>, mejorando el seguimiento y la eficiencia operativa',

    'experience.bluegroup.role': 'Desarrollador de Software',
    'experience.bluegroup.date': 'Ene 2020 — Dic 2020',
    'experience.bluegroup.desc': 'Desarrollo de aplicaciones web orientadas a marketing con analíticas integradas.',
    'experience.bluegroup.a1': 'Entregué <strong>dashboards de rendimiento</strong> de e-commerce y marketing integrando Google Ads, Facebook Pixel y métricas SEO',
    'experience.bluegroup.a2': 'Construí soluciones e-commerce escalables con alto volumen de productos para retailers locales',
    'experience.bluegroup.a3': 'Implementé <strong>integración de pagos</strong> segura para tarjetas de débito/crédito bolivianas',
    'experience.bluegroup.a4': 'Construí APIs REST para sincronizar inventario, pedidos y productos con ERPs externos',

    // Skills
    'skills.title': 'Habilidades <span class="accent">Técnicas</span>',
    'skills.databases': 'Bases de Datos',
    'skills.devops': 'DevOps y Arquitectura',

    // Projects
    'projects.title': 'Proyecto <span class="accent">Destacado</span>',
    'projects.label': 'Startup / Fundador',
    'projects.desc': 'Una plataforma de e-commerce que permite a emprendedores crear sus tiendas en línea en minutos — <strong>sin código, sin comisiones, sin complicaciones</strong>. Actualmente en fase pionera, AWTU ayuda a negocios locales a modernizar sus ventas con un panel de administración intuitivo, gestión de inventario, seguimiento de pedidos y pagos integrados.',
    'projects.h1': 'Plataforma SaaS full-stack construida desde cero',
    'projects.h2': 'Arquitectura de microservicios en Docker + Kubernetes',
    'projects.h3': 'APIs GraphQL, pipelines CI/CD, despliegues automatizados',
    'projects.h4': 'Frontend Next.js con integración de pagos Stripe',
    'projects.visit': 'Visitar AWTU.io',

    // Education
    'education.title': 'Educación',
    'education.degree': 'Ingeniero en Telecomunicaciones',

    // Contact
    'contact.title': 'Ponte en <span class="accent">Contacto</span>',
    'contact.subtitle': 'Siempre estoy abierto a nuevas oportunidades, colaboraciones o simplemente una conversación amigable sobre tecnología. ¡No dudes en contactarme!',
    'contact.phone': 'Teléfono',

    // Footer
    'footer.copy': '&copy; 2026 Jose Carlos Barriga Arnez. Todos los derechos reservados.',
  }
};

// ===========================
// i18n ENGINE
// ===========================
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update lang toggle buttons to show the OTHER language
  const otherLang = lang === 'en' ? 'es' : 'en';
  const flag = otherLang === 'es' ? '🇪🇸' : '🇺🇸';
  const label = otherLang.toUpperCase();

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelector('.lang-flag').textContent = flag;
    btn.querySelector('.lang-label').textContent = label;
  });

  // Update meta description for SEO
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'en'
      ? 'Full Stack Developer with 5+ years of experience building scalable SaaS, e-commerce, fintech and enterprise platforms. Specialized in Node.js, NestJS, React, Python, and cloud infrastructure (AWS/GCP).'
      : 'Desarrollador Full Stack con más de 5 años de experiencia construyendo plataformas SaaS, e-commerce, fintech y empresariales escalables. Especializado en Node.js, NestJS, React, Python e infraestructura en la nube (AWS/GCP).';
  }

  // Update page title
  document.title = lang === 'en'
    ? 'Jose Carlos Barriga Arnez — Full Stack Developer'
    : 'Jose Carlos Barriga Arnez — Desarrollador Full Stack';

  // Save preference
  localStorage.setItem('preferred-lang', lang);

  // Update URL without reload
  const url = new URL(window.location);
  if (lang === 'es') {
    url.searchParams.set('lang', 'es');
  } else {
    url.searchParams.delete('lang');
  }
  history.replaceState(null, '', url);
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
}

// ===========================
// INIT LANGUAGE
// ===========================
(function initLang() {
  // Priority: URL param > localStorage > browser lang
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('preferred-lang');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';

  const initialLang = urlLang || savedLang || browserLang;
  if (initialLang === 'es') {
    setLanguage('es');
  }
  // else keep default 'en' (already rendered in HTML)
})();

// ===========================
// SCROLL FADE-IN ANIMATIONS
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});

// ===========================
// MOBILE NAVIGATION
// ===========================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===========================
// LANGUAGE TOGGLE BUTTONS
// ===========================
document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleDesktop').addEventListener('click', toggleLanguage);

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('.section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 15, 26, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 15, 26, 0.85)';
  }
}, { passive: true });
