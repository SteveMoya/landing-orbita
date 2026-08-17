export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export const site = {
  name: 'Órbita',
  tagline: 'El espacio es tu próximo destino.',
  description:
    'Agencia de viajes y experiencias espaciales. Misiones orbitales, lunares y más allá — con la seguridad y el lujo de una experiencia inolvidable.',
  url: 'https://orbita.stevemoya.me',
  email: 'hola@orbita.space',
  founded: 2023,

  nav: [
    { label: 'Destinos', href: '#destinos' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Misión', href: '#mision' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Opiniones', href: '#opiniones' },
  ] satisfies NavItem[],

  hero: {
    badge: 'Agencia de viajes espaciales',
    title: { start: 'El espacio ya no es', accent: 'un límite' },
    subtitle:
      'Es tu próximo destino. Misiones orbitales, lunares y de sobrevuelo — diseñadas para quienes sueñan con las estrellas.',
    primaryCta: 'Explorar destinos',
    secondaryCta: 'Ver misión',
    stat: { value: '12', label: 'misiones completadas' },
  },

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/orbita.space', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/orbitaspace', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@orbita.space', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@orbitaspace', icon: 'youtube' },
  ] satisfies Social[],

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;
