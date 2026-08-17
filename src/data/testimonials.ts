export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// mock: testimonios ficticios de viajeros
export const testimonials: Testimonial[] = [
  {
    quote:
      'Ver la Tierra desde la cúpula de la estación cambió mi vida para siempre. Órbita cuidó cada detalle, desde el entrenamiento hasta la cena de regreso.',
    name: 'Valentina Ríos',
    role: 'Viajera · Misión Aurora I',
    initials: 'VR',
  },
  {
    quote:
      'Pensé que sería un tour más. Fue el mayor acto de ingeniería humana que he presenciado, y yo dentro.',
    name: 'Marcus Chen',
    role: 'Viajero · Base Lunar Selene II',
    initials: 'MC',
  },
  {
    quote:
      'La comunicación en vivo con mi familia desde la órbita... no hay palabras. Un equipo serio y humano.',
    name: 'Amara Diallo',
    role: 'Viajera · Misión Aurora III',
    initials: 'AD',
  },
];
