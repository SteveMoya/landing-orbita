export interface MissionStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  tone: 'ion' | 'pulse' | 'orbit' | 'stardust';
}

export const mission: MissionStep[] = [
  {
    phase: 'FASE 01',
    title: 'Reserva y evaluación',
    description:
      'Entrevista médica completa, revisión de historial y definición de tu perfil de misión.',
    duration: '1–2 meses',
    tone: 'ion',
  },
  {
    phase: 'FASE 02',
    title: 'Entrenamiento',
    description:
      'Simuladores, centrífuga, flotación neutra y trabajo en equipo. Tu cuerpo se prepara para el espacio.',
    duration: '6 meses',
    tone: 'pulse',
  },
  {
    phase: 'FASE 03',
    title: 'Integración de misión',
    description:
      'Ajuste de traje, asignación de cápsula y ensayo general con la tripulación completa.',
    duration: '2 meses',
    tone: 'orbit',
  },
  {
    phase: 'FASE 04',
    title: 'Despegue',
    description:
      'Día T: cuenta atrás en vivo, 8 minutos de ascenso y la primera vista de la Tierra desde el espacio.',
    duration: 'Día T',
    tone: 'stardust',
  },
  {
    phase: 'FASE 05',
    title: 'Regreso y legado',
    description:
      'Aterrizaje, revisión médica, gala de tripulación y tu película de misión de recuerdo.',
    duration: '2 semanas',
    tone: 'ion',
  },
];
