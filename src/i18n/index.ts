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
    title: 'Portafolio en construcción',
    description:
      'Página base del portafolio profesional. El contenido se añadirá progresivamente.',
    skip: 'Saltar al contenido',
    language: 'Idioma',
    status: 'En construcción',
    heading: 'Un espacio para lo que viene.',
    body: 'Este portafolio está en construcción. Los proyectos y el contenido profesional se incorporarán progresivamente.',
    note: 'Gracias por tu visita.',
  },
  en: {
    title: 'Portfolio under construction',
    description:
      'Professional portfolio foundation page. Content will be added progressively.',
    skip: 'Skip to content',
    language: 'Language',
    status: 'Under construction',
    heading: 'A space for what comes next.',
    body: 'This portfolio is under construction. Projects and professional content will be added progressively.',
    note: 'Thank you for visiting.',
  },
} as const;
