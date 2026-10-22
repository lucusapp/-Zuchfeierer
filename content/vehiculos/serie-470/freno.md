---
title: "Freno"
summary: "Electroneumático, electroreostático, combinado (blending), electromagnético, auxilio y estacionamiento."
order: 9
tags: ["freno", "KBR", "FM3", "blending", "patines"]
meta: {}
---

La unidad tiene seis tipos de freno: electroneumático, electroreostático, combinado, electromagnético, de auxilio y de estacionamiento.

## Electroneumático (freno de servicio)

Freno de servicio de la unidad. Según la orden dada con la palanca de freno **B4**, se manda una orden eléctrica a la **KBR**, que según la demanda de freno envía, a través del depósito de reserva **B7**, una señal neumática a la válvula de carga variable **RLV7** (una por bogie), pasando por la válvula de doble efecto **P9** (deja pasar el aire según venga la demanda del freno de servicio o del 2º freno).

- La **RLV7** recibe también, a través de la **B9** (válvula de presión media de las balonas), una señal que corrige el esfuerzo según la carga del coche.
- La RLV7 deja pasar aire de la TDP (conducto R) hacia los antibloqueo, que a su vez dejan pasar aire de la TDP —pasando por la **B12** y el calderín **B29** (el calderín está situado antes de la B12)— hacia los cilindros de freno, a una presión de unos 3,5 bar.
- En el coche motor, el depósito B7 no manda la señal directamente a la RLV7: pasa antes por un transformador de presión, que la regula según esté o no establecido el freno combinado.
- Con el **2º freno**: al mandar la orden desde cabina se tira aire de la TFA al exterior (depresión). El distribuidor **FM3** nota la depresión y manda una señal desde su depósito de reserva, por la válvula P9, a la RLV7 — repitiendo el mismo proceso que el freno de servicio.
- Si se cierra la **B12**, no hay ni freno de servicio ni segundo freno en ese bogie.
- Los cilindros de freno se pueden vaciar tirando de las cadenillas, o con los pulsadores de los antibloqueo ("piu-piu").
- Según el punto de freno, se excitan o desexcitan las electroválvulas I/II/III de la KBR ("hilos romanos"), variando la señal neumática:

| Posición manipulador | I | II | III | Estado del freno |
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

## Electroreostático

Se establece entre 11 y 140 km/h, solo en el coche motor (en composición múltiple, en todos los coches motores que no lleven motores seccionados). Es **solo de retención y mantenimiento de velocidad en pendientes** — no es un freno de urgencia ni de parada.

## Combinado (blending)

Para establecerlo: regulador de mando a la posición "F" (primera muesca de frenado eléctrico), y girar el manipulador de freno de 1 a 6 según el esfuerzo requerido — las muescas de frenado eléctrico avanzan automáticamente en el coche motor.

- Entre 100 y 120 km/h, el esfuerzo se refuerza con 50% de freno neumático en el coche motor.
- Por debajo de 100 km/h, en el coche motor solo actúa el reostático.
- En los remolques, el esfuerzo siempre es neumático, según el escalón pedido.
- Por debajo de 10 km/h, solo hay esfuerzo neumático.

| Tramo de velocidad | Coche motor | Ri / Rc |
|---|---|---|
| 140-100 km/h | Reostático; 50% de la presión de aire que correspondería | Presión de aire según el escalón de freno |
| 100-10 km/h | Reostático (si la intensidad en motores > 75 A) | Presión de aire según el escalón de freno |
| 10-0 km/h | Presión de aire total que corresponda | Presión de aire según el escalón de freno |

## Electromagnético (patines)

Cada bogie lleva un par de patines de freno, uno a cada lado, con sus elementos de guiado, distanciador y centraje. Entre 0 y 10 km/h hay un dispositivo de seguridad que impide su funcionamiento.

## Auxilio (2º freno)

El esfuerzo se establece a través de los tres distribuidores **FM3** (uno por coche). Llevando la maneta del segundo freno a fondo se provoca una frenada de urgencia por vaciado completo de la tubería de freno, quedando retenida por un trinquete.

- Se usa para remolcar una unidad con el freno electroneumático totalmente fuera de servicio.
- Hay que cargarlo al poner la unidad en marcha: maneta a "Aflojamiento" hasta que el manómetro marque **5 kg/cm²**. Si no se alcanza esa presión, la válvula de compensación no cierra y la unidad queda enfrenada por el escape de aire.

## Estacionamiento

En las unidades con la modificación de señalización, el indicador "Freno de Mano/Motores Seccionados" del pupitre parpadea si hay algún freno de estacionamiento puesto, tanto en el Cm como en el Rc (no el del Ri, que tiene su propia señalización junto al freno). En doble tracción, esa señalización solo es válida para la cabina habilitada; no hay forma de saber el estado de la unidad acoplada desde ahí. Establecer el freno de estacionamiento **no corta el circuito de tracción**.
