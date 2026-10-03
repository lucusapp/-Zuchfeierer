---
title: "Equipo neumático"
summary: "Los cinco sistemas de frenado y la producción de aire comprimido."
order: 3
tags: ["neumático", "frenos"]
meta:
  compresor_caudal: "950 l/min"
  presion_trabajo: "8,5-10 bar (máx. 11 bar)"
---

## Los cinco sistemas de frenado

### 1. Freno de servicio
Combina **freno eléctrico** (regenerativo o reostático, controlado por la **TCU**) + **freno neumático**, ambos desde el manipulador — es un frenado combinado, el llamado ***blending***. El **dinamómetro** de cabina indica qué proporción de frenado eléctrico se está aplicando en cada momento; cuando marca **-100**, el freno eléctrico ya no aporta nada y el blending pasa todo el peso al freno neumático.

El frenado neumático lo controlan dos ordenadores que forman parte del **COSMOS**:
- **BCU** (Brake Control Unit): el principal. Hay una en A1 y otra en A2, cada una responsable del frenado neumático de su mitad del tren.
- **WSP** (Wheel Slip Protection): el antibloqueo. También hay uno por mitad del tren.

Si falla una BCU, se ve en el IHM (su leyenda se pone en **rojo**) y el **WSP de esa misma mitad** asume el control automáticamente, sin perder prestaciones de frenado. Además, el maquinista puede forzar el cambio a la BCU del otro coche con el **conmutador de cambio de panel de cabina** — por ejemplo, si falla la BCU del A1, cambiando de panel pasa a controlar la BCU del A2 (ver Averías: *fallo en el panel de generación de TFA*).

> El WSP falla con relativa frecuencia por sí solo (no por avería de la BCU). Cuando ocurre, el IHM avisa con *"Fallo WSP, frene suavemente"* y **no hay ninguna restricción** de velocidad ni de servicio — solo conviene frenar con suavidad, ya que se pierde la protección antideslizante mientras dura. Ver Averías.

A modo de curiosidad: la presión a los cilindros de freno se aplica por dos vías — el **canal directo** (el normal, presión de la TDP a través del DCL) o el **canal indirecto** (con la TFA y un distribuidor, si falla la BCU o en caso de remolque). Detalle en Paneles neumáticos.

- Entre 160 y 15 km/h: el neumático complementa al eléctrico si este no llega a cubrir la demanda.
- Si falla la TCU (sin freno eléctrico): la BCU asume todo el frenado neumático.
- Entre 0 y 15 km/h: **solo freno neumático**.

Esta regla (eléctrico 160-15 km/h, neumático por debajo) es para el frenado **manual** con el manipulador. En **velocidad prefijada** (6-160 km/h) el frenado es **solo eléctrico** en todo su rango, sin intervención neumática — si se prefija 6 km/h, frena eléctricamente hasta esos 6 km/h. Ver Equipo eléctrico.

> **Importante para averías:** cuando se habla de "condenar" o "aislar" el freno de servicio, siempre es un aislamiento **neumático** — la parte eléctrica (TCU) no se puede aislar de forma independiente en esta serie (a diferencia de la 447). Ver **Averías** para la tabla de qué panel usar según el eje afectado.

### 2. Freno de urgencia / emergencia
Completamente neumático, independiente del de servicio. Se activa con manipulador, seta de emergencia, tiradores de alarma, o automáticamente por sistemas de seguridad. Corta tracción de inmediato y aplica la máxima deceleración. Al accionarse desde la seta o el manipulador en posición máxima, suena la bocina (aguda y grave a la vez).

### 3. Freno de auxilio
Completamente neumático, mediante la **TFA** (Tubería de Freno Automático), como respaldo independiente. Ver detalle de límites de velocidad en Averías.

### 4. Freno de estacionamiento
Dos cilindros por bogie. **Es completamente neumático — no tiene ninguna parte eléctrica** (a diferencia del freno de servicio, que sí combina eléctrico + neumático). No se puede aplicar a la vez que el freno de servicio. Indicadores visuales en los coches.

Además del aislamiento tradicional (llave + trinquetes, ver Averías), esta serie permite **apretarlo o aflojarlo eléctricamente** desde el panel sin necesidad de aislar nada — útil sobre todo para soltar todos los bogies de golpe antes de un remolque, en vez de ir uno a uno con trinquetes. Ver el detalle en **Averías** y en **Paneles neumáticos**.

### 5. Freno de retención (hill holder)
Automático: si la velocidad baja de 3 km/h con el manipulador en posición de frenado, aplica un esfuerzo mínimo para no retroceder en pendiente. Se mantiene hasta que la tracción es suficiente para arrancar o se supera 3 km/h.

## Producción de aire comprimido

Dos equipos independientes (compresor rotativo de tornillo + tratamiento de aire), bajo bastidor de **A4 y A5**. Capacidad **950 l/min**, presión de trabajo 8,5-10 bar (soporta hasta 11 bar). Los 2 compresores los gestiona el COSMOS, normalmente a días alternos (ambos pueden trabajar juntos al encender el tren o cuando haga falta).

Tratamiento: secador autoregenerativo de doble torre + separador de aceite + purga.

**Compresores auxiliares** (2, alimentados por batería): generan la presión mínima para subir pantógrafos si no hay aire en el circuito principal. Depósito de reserva de 6 bar — si baja de ese valor, el COSMOS enciende los compresores auxiliares automáticamente.

El aire comprimido alimenta: frenado, suspensión neumática secundaria, estribos, accionamiento de pantógrafos (vía compresor auxiliar si hace falta), y equipos auxiliares (retrovisores, bocinas, areneros, engrase de pestaña).

Para el detalle de paneles físicos y llaves de aislamiento, ve al submenú **Paneles neumáticos**. Para procedimientos de avería, ve a **Averías**.
