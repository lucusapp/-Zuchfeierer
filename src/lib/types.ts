export type Section = 'vehiculos' | 'infraestructura' | 'normativa'

export interface Doc {
  section: Section
  slug: string
  title: string
  summary: string
  order: number
  tags: string[]
  meta: Record<string, string>
  body: string
}

export const SECTIONS: { id: Section; label: string; description: string; icon: string }[] = [
  {
    id: 'vehiculos',
    label: 'Vehículos',
    description: 'Material rodante habilitado: características técnicas y cabina.',
    icon: '🚆',
  },
  {
    id: 'infraestructura',
    label: 'Infraestructura',
    description: 'Líneas y tramos: estaciones, velocidades y puntos singulares.',
    icon: '🛤️',
  },
  {
    id: 'normativa',
    label: 'Normativa',
    description: 'Procedimientos y actuación según normativa vigente.',
    icon: '📘',
  },
]
