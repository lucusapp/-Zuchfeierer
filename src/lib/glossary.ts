// Términos que se enlazan automáticamente la primera vez que aparecen en
// una página, hacia la página donde están explicados (o hacia la avería
// que los menciona). Deliberadamente corta y con términos poco ambiguos:
// las siglas de 2-3 letras sueltas (MS, SD...) no se incluyen sin más
// contexto porque podrían coincidir por casualidad con texto normal.
//
// `scope` limita el término a las páginas cuyo href empiece por ese
// prefijo: 448 y 470 usan términos iguales (DFD, CCOS1, cuchilla MS...)
// para cosas parecidas pero no idénticas, así que un término de la 448
// nunca debe enlazar a la explicación de la 470, ni al revés.
export type GlossaryTerm = {
  term: string
  href: string
  scope: string
}

export const GLOSSARY: GlossaryTerm[] = [
  // Serie 448
  { term: 'cuchilla MS', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'CCOS1', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'CCOS2', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'MMOCD1', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'MMOCD2', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'DFD', href: '#/vehiculos/serie-448/equipo-electrico', scope: '#/vehiculos/serie-448' },
  { term: 'derivación en resistencias principales', href: '#/vehiculos/serie-448/averias', scope: '#/vehiculos/serie-448' },

  // Serie 470
  { term: 'cuchilla MS', href: '#/vehiculos/serie-470/averias', scope: '#/vehiculos/serie-470' },
  { term: 'CCOS1', href: '#/vehiculos/serie-470/traccion-arboles-levas', scope: '#/vehiculos/serie-470' },
  { term: 'CCOS2', href: '#/vehiculos/serie-470/traccion-arboles-levas', scope: '#/vehiculos/serie-470' },
  { term: 'MMOCD1', href: '#/vehiculos/serie-470/armarios-proteccion', scope: '#/vehiculos/serie-470' },
  { term: 'MMOCD2', href: '#/vehiculos/serie-470/armarios-proteccion', scope: '#/vehiculos/serie-470' },
  { term: 'DFD', href: '#/vehiculos/serie-470/armarios-proteccion', scope: '#/vehiculos/serie-470' },
  { term: 'derivación en resistencias principales', href: '#/vehiculos/serie-470/averias', scope: '#/vehiculos/serie-470' },
  { term: 'GMA', href: '#/vehiculos/serie-470/equipo-coches', scope: '#/vehiculos/serie-470' },
  { term: 'autotransformador', href: '#/vehiculos/serie-470/equipo-coches', scope: '#/vehiculos/serie-470' },
]
