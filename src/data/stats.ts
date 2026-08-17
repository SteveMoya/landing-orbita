export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 12, suffix: '', label: 'Misiones completadas' },
  { value: 42, suffix: '', label: 'Viajeros al espacio' },
  { value: 100, suffix: '%', label: 'Tasa de retorno seguro' },
  { value: 98, suffix: '%', label: 'Viajeros que repiten' },
];
