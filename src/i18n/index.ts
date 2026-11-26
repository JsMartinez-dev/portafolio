export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export function homePath(locale: Locale): string {
  return `/${locale}/`;
}

// Only a URL builder; project pages belong to F5. Translate slugs per entry.
export function projectPath(locale: Locale, slug: string): string {
  const segment = locale === 'es' ? 'proyectos' : 'projects';
  return `${homePath(locale)}${segment}/${encodeURIComponent(slug)}/`;
}

export const messages = {
  es: {
    description:
      'Desarrollo de software con enfoque en backend e interés por la arquitectura y el análisis de datos.',
    skip: 'Saltar al contenido',
    language: 'Idioma',
    role: 'Desarrollador de Software',
    navigation: 'Navegación principal',
    sections: {
      about: 'Sobre mí',
      stack: 'Tecnologías',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV (PDF)',
    cvPending: 'CV próximamente.',
    technologies: {
      id: 'tecnologias',
      groups: {
        backend: 'Backend',
        databases: 'Bases de datos',
        devops: 'DevOps',
        otherTools: 'Otras herramientas',
      },
    },
    about: {
      id: 'sobre-mi',
      paragraphs: [
        'Me gusta entender cómo funcionan las aplicaciones por dentro. En el backend, eso significa pensar cómo se organizan los datos, dónde van las reglas de negocio y cómo facilitar los cambios a medida que crece un proyecto.',
        'La monitoría en Programación Orientada a Objetos me dio la oportunidad de explicar ideas técnicas con ejemplos. Me interesa llevar esa misma claridad a la forma en que diseño y documento software.',
      ],
    },
    projectsId: 'proyectos',
    contactId: 'contacto',
    projects: {
      flashbid:
        'Plataforma de subastas en tiempo real con pujas en directo y créditos virtuales.',
      eventario:
        'Plataforma de gestión de eventos con inscripciones, pagos y validación de entradas por QR.',
      repository: 'Repositorio',
      demo: 'Ver demo',
    },
  },
  en: {
    description:
      'Backend-focused software development, with an interest in software architecture and data analysis.',
    skip: 'Skip to content',
    language: 'Language',
    role: 'Software Developer',
    navigation: 'Main navigation',
    sections: {
      about: 'About me',
      stack: 'Technologies',
      projects: 'Projects',
      contact: 'Contact',
    },
    viewProjects: 'View projects',
    downloadCv: 'Download CV (PDF)',
    cvPending: 'CV coming soon.',
    technologies: {
      id: 'technologies',
      groups: {
        backend: 'Backend',
        databases: 'Database',
        devops: 'DevOps',
        otherTools: 'Other tools',
      },
    },
    about: {
      id: 'about',
      paragraphs: [
        'I like understanding how applications work under the hood. In backend development, that means thinking about how data is organized, where business rules belong, and how to make changes easier as a project grows.',
        'Working as a teaching assistant for Object-Oriented Programming gave me the chance to explain technical ideas through examples. I aim to bring that same clarity to the way I design and document software.',
      ],
    },
    projectsId: 'projects',
    contactId: 'contact',
    projects: {
      flashbid:
        'Real-time auction platform with live bidding and virtual credits.',
      eventario:
        'Event management platform with registration, payments, and QR ticket validation.',
      repository: 'Repository',
      demo: 'Watch demo',
    },
  },
} as const;
