export interface Destination {
  name: string;
  duration: string;
  price: string;
  description: string;
  tags: string[];
  tone: 'ion' | 'pulse' | 'orbit' | 'stardust';
  featured?: boolean;
}

// mock: destinos espaciales ficticios
export const destinations: Destination[] = [
  {
    name: 'Estación Orbital Aurora',
    duration: '7 días en órbita baja',
    price: '$2.4M',
    description:
      'Vive en gravedad cero, observa 16 amaneceres al día y duerme con la Tierra de fondo.',
    tags: ['Órbita baja', 'Gravedad cero'],
    tone: 'ion',
    featured: true,
  },
  {
    name: 'Base Lunar Selene',
    duration: '14 días en la Luna',
    price: '$4.8M',
    description:
      'Caminata lunar guiada, vehículo rover y el cielo más oscuro jamás visto.',
    tags: ['Luna', 'Caminata lunar'],
    tone: 'orbit',
  },
  {
    name: 'Crucero a Marte',
    duration: '9 meses ida y vuelta',
    price: '$12M',
    description:
      'La travesía definitiva: tripulación internacional, laboratorio a bordo y el planeta rojo a la vista.',
    tags: ['Marte', 'Misión larga'],
    tone: 'pulse',
  },
  {
    name: 'Anillos de Saturno',
    duration: 'Sobrevuelo turístico',
    price: '$18M',
    description:
      'El espectáculo del sistema solar: atraviesa el plano de los anillos a 20.000 km/h.',
    tags: ['Sobrevuelo', 'Espectacular'],
    tone: 'stardust',
  },
  {
    name: 'Observatorio L2',
    duration: '10 días en el punto L2',
    price: '$6.5M',
    description:
      'Telescopio de espacio profundo con astrónomos de la agencia. Ciencia pura, cielo sin límites.',
    tags: ['Espacio profundo', 'Ciencia'],
    tone: 'ion',
  },
  {
    name: 'Isla de Cero-G',
    duration: '3 días de lujo orbital',
    price: '$900K',
    description:
      'La puerta de entrada al espacio: vuelo suborbital, cena con vista a la Tierra y regreso el mismo mes.',
    tags: ['Boutique', 'Suborbital'],
    tone: 'orbit',
  },
];
