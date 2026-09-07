---
title: "Averías frecuentes"
summary: "Ficha por avería: qué ocurre, cómo se detecta, sobre qué actuar y qué provoca. Agrupadas por tipo."
order: 0
tags: ["avería", "consulta rápida"]
meta: {}
---

Cada avería sigue el mismo esquema: **qué ocurre** → **cómo se detecta** → **sobre qué actuar** → **qué provoca / consecuencia**. Agrupadas por tipo (color) para localizarlas rápido. Para el funcionamiento completo de cada sistema, ve al submenú correspondiente (Equipo eléctrico, Equipo neumático, Paneles neumáticos).

## Eléctrico

### Derivación / seccionamiento de un pantógrafo
- **Qué ocurre:** derivación (fuga a tierra) en uno de los dos pantógrafos.
- **Cómo se detecta:** el disyuntor no cierra, o se abre continuamente al intentarlo.
- **Sobre qué actuar:** conmutador **Nº8** del armario de baja tensión (cabina A1/A2) para seccionar el pantógrafo averiado; opcionalmente llave **U08/1** del panel de control del pantógrafo para aislar también la parte neumática (recomendable, no imprescindible).
- **Qué provoca / consecuencia:** una vez seccionado, se reanuda la marcha con el otro pantógrafo con normalidad.

### Fallo de un TCU (convertidor de tracción)
- **Qué ocurre:** avería en uno de los dos convertidores de tracción (uno por cadena, en A1 o A2).
- **Cómo se detecta:** se desconecta **automáticamente**; el IHM avisa de la avería detectada y del procedimiento a seguir.
- **Sobre qué actuar:** ninguna llave de aislamiento específica — este tren **no tiene pulsador** para habilitar/deshabilitar el TCU; la única forma de intervenir es desconectando el disyuntor correspondiente.
- **Qué provoca / consecuencia:** quedan fuera de servicio los motores de esa cadena; el tren continúa pero con solo el **50% de prestaciones** en tracción y freno eléctrico. *El MC no aclara si se puede salir de origen ya con esta avería presente — queda a criterio del maquinista.*

### Fallo de un ACU (convertidor de servicios auxiliares)
- **Qué ocurre:** avería en uno de los dos convertidores auxiliares (A4 o A5).
- **Cómo se detecta:** se desconecta automáticamente; aviso en IHM.
- **Sobre qué actuar:** **no se puede forzar manualmente** el cambio de alimentación — lo gestiona el COSMOS. Si hiciera falta anularlo del todo, se hace desde el seccionador de distribución (pero esto anula también la TCU asociada).
- **Qué provoca / consecuencia:** los equipos pasan a alimentarse automáticamente por el otro ACU; los servicios auxiliares se mantienen al 100%. **Si fallan los dos ACU, el tren no puede encenderse.**

### Seccionamiento de mitad del tren (SD)
- **Qué ocurre:** derivación / avería de alta tensión en un semitrén (TCU + ACU) que el COSMOS no consigue subsanar por sí solo. Solo hay **un SD en todo el tren** (coche A3), situado **después de los pantógrafos y antes de los disyuntores**.
- **Cómo se detecta:** persistencia de la avería de alta pese a la gestión automática del COSMOS.
- **Sobre qué actuar:** conmutador del **seccionador de distribución (SD)**, en el armario BT de cabina — se acciona siempre con **batería conectada y pantógrafos bajados**. El procedimiento cambia según la composición:
  - **En simple:** no hace falta cambiar de cabina. Se acciona el SD y, desde la misma cabina, se sube el pantógrafo del semitrén que queda útil (si el A2 es el inútil, se sube el pantógrafo 1 del A1 y se sigue con esa cadena).
  - **En mando múltiple:** si la derivación está en la unidad acoplada de detrás, sí hay que cambiar de cabina — ir a esa unidad y accionar el SD ahí.
- **Qué provoca / consecuencia:** esa mitad queda aislada eléctricamente; el semitrén útil sigue con **50% de tracción/freno eléctrico** y **100% de servicios auxiliares**.

## Neumático — producción de aire

### Avería de un compresor principal
- **Qué ocurre:** fallo de uno de los dos grupos motor-compresor (A4/A5).
- **Cómo se detecta:** incidencia registrada y señalizada en el IHM de cabina.
- **Sobre qué actuar:** ninguna acción manual — es automático.
- **Qué provoca / consecuencia:** el otro grupo asume automáticamente la generación de aire; el tren continúa en servicio sin más intervención.

### Presión de depósitos principales por debajo de 6 bares (PMDP)
- **Qué ocurre:** una fuga en el circuito neumático hace descender la presión de los depósitos principales.
- **Cómo se detecta:** actúa el presostato de presión mínima (**PMDP**) al bajar de **6 bares**.
- **Sobre qué actuar:** conmutador **«Bypass lazo de freno»**, solo si es necesario apartar el tren.
- **Qué provoca / consecuencia:** por debajo de 6 bares se aplica **freno de urgencia automáticamente**. Con el bypass puenteado: circulación posible solo hasta **50 km/h**, y siempre que la presión no baje de **5 bares**.

## Frenos

### Fallo en el panel de generación de TFA / el freno no libera
- **Qué ocurre:** fallo de la BCU de la cabina habilitada o de algún elemento del panel de generación de TFA.
- **Cómo se detecta:** el IHM avisa del fallo; el maquinista percibe que el freno no libera.
- **Sobre qué actuar:** conmutador de cabina (a mano derecha del pupitre) para cambiar al panel/BCU de la cabina no habilitada; si no soluciona, seleccionar **freno de auxilio**.
- **Qué provoca / consecuencia:** con freno de auxilio no hay freno de retención — el apriete/afloje es directo con el palillo, con poco margen de precisión. Límite de velocidad: **120 km/h**. *Cambiar el panel de freno a la cabina no habilitada provoca frenado de urgencia — no se puede hacer en marcha (a diferencia de la 447).*

### Condena de freno de servicio en un eje
- **Qué ocurre:** agarrotamiento **neumático** de las guarniciones de freno en los discos de un eje. *Importante: aislar el freno de servicio en esta unidad es siempre neumático — este tren no permite aislar la parte eléctrica del freno de servicio (a diferencia de la serie 447). La parte eléctrica la controla la TCU y la neumática la BCU (o el WSP si falla la BCU), pero lo que se anula con las llaves es solo lo neumático.*
- **Cómo se detecta:** en conducción (frenado irregular/ruido) o inspección.
- **Sobre qué actuar:** siempre de 3 en 3 ejes (remolques o motores por separado), en el **panel de freno TFA** que corresponda según el eje averiado:

  | Eje averiado | Panel | Llave | Grupo que se aísla |
  |---|---|---|---|
  | 1, 2 o 6 | Panel de freno TFA del **A4** | 10/1 | los 3 ejes remolques (1,2,6) |
  | 3, 4 o 5 | Panel de freno TFA del **A4** | 10/2 | los 3 ejes motores (3,4,5) |
  | 7, 11 o 12 | Panel de freno TFA del **A5** | 10/1 | los 3 ejes remolques (7,11,12) |
  | 8, 9 o 10 | Panel de freno TFA del **A5** | 10/2 | los 3 ejes motores (8,9,10) |

  **Accionar también el bypass de tracción.**
- **Qué provoca / consecuencia:** solo se puede aislar **una llave en todo el tren** (3 ejes). Límite de velocidad: **110 km/h**. Con 6, 9 o 12 ejes aislados: no permitido (ver tabla de velocidades detallada más abajo para el caso de doble UT).

### Condena de freno de estacionamiento
- **Qué ocurre:** agarrotamiento **neumático** en el bloque del muelle acumulador o fuga en tuberías de un bogie (el freno de estacionamiento no tiene parte eléctrica, es puramente neumático).
- **Cómo se detecta:** cae la presión en los cilindros de freno de estacionamiento y este se aplica solo → **se dispara el freno de emergencia de toda la unidad**.
- **Sobre qué actuar:** aislamiento según el bogie afectado — **esto usa siempre llave + trinquetes**, no el cuadradillo eléctrico (ver la avería siguiente para la alternativa eléctrica):

  | Eje averiado | Bogie | Panel | Llave |
  |---|---|---|---|
  | 1 o 2 | Extremo A1 | Panel auxiliar de freno del **A1** | Nº5 |
  | 3, 4, 5 o 6 | Compartidos A1/A4 y A4/A3 (bogies 2 y 3) | Panel de freno TFA del **A4** | Nº5 |
  | 7, 8, 9 o 10 | Compartidos A3/A5 y A5/A2 (bogies 4 y 5) | Panel de freno TFA del **A5** | Nº5 |
  | 11 o 12 | Extremo A2 | Panel auxiliar de freno del **A2** | Nº5 |

  1. Cerrar la llave de condena correspondiente.
  2. Aflojar manualmente con los **trinquetes** (2 por bogie — ruido característico).
  3. Accionar el **bypass de lazo de tracción** (si no, sigue apareciendo la luz de freno de estacionamiento).
- **Qué provoca / consecuencia:** esfuerzo de frenado de estacionamiento reducido, **sin límite de velocidad** (a diferencia del freno de servicio). Límite práctico en Cataluña (excepto R3): hasta 2 bogies aislados (3 en doble UT) sin problema. Pendiente máxima soportada con freno de estacionamiento: 45‰ (en tara, todos los bogies en servicio) — la línea Barcelona-Puigcerdà tiene 43‰.

### Apretar / aflojar freno de estacionamiento eléctricamente (sin aislar)
- **Qué ocurre:** necesitas aplicar o soltar el freno de estacionamiento de un bogie **sin** que haya una avería real que requiera aislarlo con llave + trinquetes — por ejemplo, para soltar todos los frenos de estacionamiento del tren antes de un remolque, evitándote ir bogie a bogie con trinquetes.
- **Cómo se detecta:** decisión del maquinista, no es una avería en sí — es una función adicional de esta serie (novedad frente a trenes más antiguos).
- **Sobre qué actuar:** es una orden **eléctrica** a los cilindros, equivalente a pulsar el botón de cabina pero hecha desde el panel — no requiere aislar ni tirar de trinquetes:
  - **Bogies compartidos:** girar el **cuadradillo** del panel **EP-Compact** (ejes motores, A4/A5 lado izquierdo) para apretar o aflojar.
  - **Bogies extremos:** los **tetones** junto a cada electroválvula del **panel auxiliar de freno** (A1/A2 lado izquierdo).
- **Qué provoca / consecuencia:** mismo resultado que el método tradicional (llave + trinquetes) pero sin necesidad de aislar nada — más rápido, especialmente útil cuando hay que soltar muchos bogies (remolque). El método de llave + trinquetes sigue siendo el único válido cuando lo que hay es una avería real que exige dejar el freno aislado.

> 💡 **Consejo del formador:** el método eléctrico (cuadradillo/tetones) es más cómodo, pero es propio de esta serie. El método tradicional (llave + trinquetes) es el que funciona en **todos** los trenes, así que conviene dominarlo bien aunque en la 449 tengas el atajo eléctrico disponible.

### Procedimiento general — avería de freno de servicio
- **Qué ocurre:** el freno de servicio no responde con normalidad.
- **Cómo se detecta:** frenado insuficiente o ausente pese a demanda del manipulador.
- **Sobre qué actuar, en este orden:**
  1. Cambiar de panel desde el selector de cabina.
  2. Seleccionar freno de auxilio (máx. 120 km/h, hasta apartarse).
  3. Efectuar un reset de tren.
  4. Si persiste: aislar el freno de servicio del eje afectado (ver condena de freno de servicio, arriba).
- **Qué provoca / consecuencia:** tras aislar, se sigue viaje a la velocidad correspondiente según ejes aislados, con el bypass de tracción activado.

### Procedimiento general — avería de freno de estacionamiento
- **Qué ocurre:** el freno de estacionamiento se aplica de forma inesperada o no libera.
- **Cómo se detecta:** aplicación automática del freno de emergencia si el de estacionamiento está apretado.
- **Sobre qué actuar, en este orden:**
  1. Reset de tren si es posible.
  2. Revisar los **señalinos** de los faldones exteriores — si es falsa avería, seguir viaje con el bypass de tracción.
  3. Si es avería real: aislar el freno de estacionamiento del bogie (ver arriba).
  4. Seguir viaje sin límite de velocidad, con bypass de tracción.
- **Qué provoca / consecuencia:** ver límites de bogies aislados en la sección de arriba.

### Circulando con freno de auxilio — límites de velocidad
- **Qué ocurre:** el tren circula usando el freno de auxilio (TFA) en vez del freno de servicio normal.
- **Cómo se detecta:** activado manualmente por el maquinista mediante el conmutador de cabina.
- **Sobre qué actuar:** respetar el límite de velocidad según el modo:
  - Sin modo socorro: máx. **120 km/h**.
  - En modo socorro: máx. **80 km/h**.
  - Pendiente prolongada (≥25 km, pendiente media ≥20‰): máx. **75 km/h**.
- **Qué provoca / consecuencia:** riesgo de calentamiento de discos si se hacen demandas de freno fuertes y sostenidas — circular con precaución, evitando frenadas continuadas.
