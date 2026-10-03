---
title: "Sistema de frenos (electroneumático, reostático, combinado)"
summary: "Escalones del freno electroneumático, freno reostático, freno combinado (blending) y el freno de auxilio."
order: 4
tags: ["frenos", "electroneumático", "reostático", "blending"]
meta: {}
---

> Fuente: Chuleta 448 (Dpto. de Formación de Tarragona).

## Freno electroneumático

- Freno de disco: discos en las ruedas en los ejes motores y en el eje en los ejes remolques.
- El regulador de freno **B4** se alimenta por un cable de cobre que recorre el tren en forma de lazo.
- El manipulador de freno B4 acciona, a través de una caja de relés, tres electroválvulas (**I, II, III**) de cada unidad de freno. Abren superficies con relación 1, 2 y 4, lo que permite **siete escalones** de freno neumático.
- Con las tres excitadas, el freno está **aflojado**. Con las tres desexcitadas, **urgencia**.
- Posición 7 del manipulador: urgencia + arenado. Posición 8: urgencia + patines (freno electromagnético).
- Antibloqueo: uno por bogie.

| Posición del manipulador | I | II | III | Estado del freno |
|---|---|---|---|---|
| 0 | 1 | 1 | 1 | Aflojado |
| 1 | 0 | 1 | 1 | 1er escalón |
| 2 | 1 | 0 | 1 | 2º escalón |
| 3 | 0 | 0 | 1 | 3er escalón |
| 4 | 1 | 1 | 0 | 4º escalón |
| 5 | 0 | 1 | 0 | 5º escalón |
| 6 | 1 | 0 | 0 | 6º escalón |
| 7 | 0 | 0 | 0 | Urgencia |
| 8 | 0 | 0 | 0 | Urgencia + patines |

## Freno reostático (eléctrico)

- Entre **11 y 160 km/h** en el coche motor (en múltiple, en todos los coches motores que no tengan motores seccionados).
- El control de intensidad es automático. El maquinista puede aumentar muescas mientras la intensidad esté por debajo de la de tarado.
- Primera muesca: regulador en "F", esperando unos segundos. Más o menos muescas con "+" o "−"; el regulador vuelve a "F".
- **Precaución**: se destruye por debajo de 11 km/h. No es freno de urgencia ni de parada.

## Freno combinado (blending)

Electroneumático y reostático: regulador en "F" y maneta B4 en una de sus 6 primeras posiciones. En las posiciones 7 y 8 se destruye el freno reostático.

| Velocidad | CM | RI | RC |
|---|---|---|---|
| 160 – 112 km/h | Reostático, 50% de la presión de aire que corresponda (blending) | Presión de aire según el escalón | Presión de aire según el escalón |
| 112 – 10 km/h | Reostático si la intensidad en motores es > 75 A | Presión de aire según el escalón | Presión de aire según el escalón |
| 10 – 0 km/h | Presión de aire total que corresponda | Presión de aire según el escalón | Presión de aire según el escalón |

- Freno de patines a partir de **6 km/h**.
- Si el freno electroneumático no vuelve a su posición y los patines rozan el carril: actuar sobre la **llave M6** del patín correspondiente, quitando aire para permitir la subida.

## Freno de auxilio (segundo freno)

- Esfuerzo de frenado a través de los **tres distribuidores FM3**, uno en cada coche.
- Hay que **cargarlo** al poner la unidad en marcha: maneta en "Aflojamiento" hasta que el manómetro marque **5 kg/cm²**. Si no llega a esa presión, la válvula de compensación no cierra y el aire escapa de la tubería de freno, enfrenando la unidad.
- Distribuidores KBR (servicio) y FM3 (auxilio): ver Freno de servicio y auxiliar.
