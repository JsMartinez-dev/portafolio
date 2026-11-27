export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
export const homePath = (locale: Locale) => `/${locale}/`;
export const projectPath = (locale: Locale, slug: string) =>
  `/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}/${encodeURIComponent(slug)}/`;
export const profile = {
  name: 'Juan Sebastián Martínez',
  github: 'https://github.com/JsMartinez-dev',
  linkedin:
    'https://www.linkedin.com/in/juan-sebasti%C3%A1n-mart%C3%ADnez-uribe-697a52280',
  email: 'jsmartinezu@gmail.com',
};
export const messages = {
  es: {
    description:
      'Diseño APIs con Java y Spring Boot. En mis proyectos he coordinado pujas simultáneas, protegido entradas digitales y automatizado pruebas de servicios backend.',
    role: 'Desarrollador backend · Java y Spring Boot',
    skip: 'Saltar al contenido',
    language: 'Idioma',
    navigation: 'Navegación principal',
    sections: {
      about: 'Sobre mí',
      stack: 'Tecnologías',
      projects: 'Proyectos',
      experience: 'Trayectoria',
      contact: 'Contacto',
    },
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV (PDF)',
    technologies: {
      id: 'tecnologias',
      groups: [
        'Backend y frameworks',
        'Lenguajes',
        'Bases de datos',
        'DevOps e infraestructura',
        'Testing y calidad',
        'Herramientas de desarrollo',
      ],
    },
    about: {
      id: 'sobre-mi',
      paragraphs: [
        'Estudio Ingeniería de Sistemas en la Universidad del Magdalena. Me interesa lo que ocurre entre una petición y su respuesta. En FlashBid, aceptar una puja exige reservar un saldo, liberar otro y comunicar el cambio a quienes siguen la subasta.',
        'Trabajo con Java, Spring Boot y Python. Separo las reglas de negocio de la persistencia, documento las decisiones de la API y automatizo comprobaciones con Docker y GitHub Actions. La monitoría de programación me enseñó a explicar esas decisiones con ejemplos concretos.',
      ],
    },
    experience: [
      [
        '2022 — actualidad',
        'Ingeniería de Sistemas',
        'Universidad del Magdalena. Formación en desarrollo de software y proyectos de ingeniería con bases de datos SQL y NoSQL.',
      ],
      [
        '2023 — 2024',
        'Monitor de Programación Orientada a Objetos',
        'Universidad del Magdalena. Acompañamiento académico en Java y C++.',
      ],
    ],
    projectsId: 'proyectos',
    contactId: 'contacto',
    experienceId: 'trayectoria',
    projects: {
      repository: 'Repositorio',
      details: 'Ver detalles',
      close: 'Cerrar',
      overview: 'El proyecto',
      architecture: 'Arquitectura y decisiones',
      video: 'Demostración',
      watch: 'Ver en YouTube',
      site: 'Abrir aplicación',
    },
    contactLine: '¿Tienes una oportunidad de prácticas en backend? Hablemos.',
  },
  en: {
    description:
      'I build APIs with Java and Spring Boot. My projects cover concurrent bids, secure digital admission and automated testing for backend services.',
    role: 'Backend developer · Java and Spring Boot',
    skip: 'Skip to content',
    language: 'Language',
    navigation: 'Main navigation',
    sections: {
      about: 'About me',
      stack: 'Technologies',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    viewProjects: 'View projects',
    downloadCv: 'Download CV (PDF)',
    technologies: {
      id: 'technologies',
      groups: [
        'Backend and frameworks',
        'Languages',
        'Databases',
        'DevOps and infrastructure',
        'Testing and quality',
        'Development tools',
      ],
    },
    about: {
      id: 'about',
      paragraphs: [
        'I study Systems Engineering at Universidad del Magdalena. I’m interested in what happens between a request and its response. In FlashBid, accepting a bid means reserving one balance, releasing another and notifying everyone watching the auction.',
        'I work with Java, Spring Boot and Python. I separate business rules from persistence, document API decisions and automate checks with Docker and GitHub Actions. Teaching programming helped me explain those decisions through concrete examples.',
      ],
    },
    experience: [
      [
        '2022 — present',
        'Systems Engineering',
        'Universidad del Magdalena. Coursework and software engineering projects using SQL and NoSQL databases.',
      ],
      [
        '2023 — 2024',
        'Object-Oriented Programming teaching assistant',
        'Universidad del Magdalena. Academic support for students working in Java and C++.',
      ],
    ],
    projectsId: 'projects',
    contactId: 'contact',
    experienceId: 'experience',
    projects: {
      repository: 'Repository',
      details: 'View details',
      close: 'Close',
      overview: 'The project',
      architecture: 'Architecture and decisions',
      video: 'Demonstration',
      watch: 'Watch on YouTube',
      site: 'Open application',
    },
    contactLine: 'Have a backend internship opportunity? Let’s talk.',
  },
} as const;
