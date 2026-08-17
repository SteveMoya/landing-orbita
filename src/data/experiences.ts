import type { IconName } from '../components/ui/Icon.astro';

export interface Experience {
  icon: IconName;
  title: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    icon: 'users',
    title: 'Entrenamiento de astronauta',
    description:
      '6 meses de preparación con simuladores de vuelo, centrífuga y supervivencia. Saldrás certificado.',
  },
  {
    icon: 'sparkles',
    title: 'Traje personalizado',
    description:
      'Tu traje espacial a medida: medidas exactas, parche con tu nombre y colores de tu misión.',
  },
  {
    icon: 'camera',
    title: 'Fotografía 360°',
    description:
      'Cámara de 360° integrada al casco: revive tu misión completa en realidad virtual al volver.',
  },
  {
    icon: 'signal',
    title: 'Comunicación en vivo',
    description:
      'Familias y seguidores ven tu misión en tiempo real: video 4K y audio bidireccional desde la órbita.',
  },
  {
    icon: 'shield',
    title: 'Seguro de misión',
    description:
      'Cobertura total durante entrenamiento y vuelo, con protocolo de aborte en cada fase.',
  },
  {
    icon: 'star',
    title: 'Gastronomía espacial',
    description:
      'Menú degustación diseñado por chefs con estrella Michelin, optimizado para gravedad cero.',
  },
];
