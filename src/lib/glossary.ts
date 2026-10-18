// Términos que se enlazan automáticamente la primera vez que aparecen en
// una página, hacia la página donde están explicados (o hacia la avería
// que los menciona). Deliberadamente corta y con términos poco ambiguos:
// las siglas de 2-3 letras sueltas (MS, SD...) no se incluyen sin más
// contexto porque podrían coincidir por casualidad con texto normal.
export type GlossaryTerm = {
  term: string
  href: string
}

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'cuchilla MS', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'CCOS1', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'CCOS2', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'MMOCD1', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'MMOCD2', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'DFD', href: '#/vehiculos/serie-448/equipo-electrico' },
  { term: 'derivación en resistencias principales', href: '#/vehiculos/serie-448/averias' },
]
