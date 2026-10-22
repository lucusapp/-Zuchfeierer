---
title: "Tracción y árboles de levas"
summary: "Regulador de mando, árboles de levas KD y RD, cofre de control y tabla de posiciones."
order: 2
tags: ["tracción", "árboles de levas", "regulador", "CCOS"]
meta: {}
---

## Motores de tracción

- 4 motores, todos en el coche motor (uno por eje). **Tensión de trabajo: 1.500 Vcc.** Acoplados por pares.
- Según la posición del combinador de mando, los 4 motores quedan en serie o en 2 ramas en paralelo.
- La transmisión del esfuerzo se hace mediante transmisión WM.

## Regulador de mando y árboles de levas

- El regulador de mando envía la orden, pasando por los **CCOS**, a la caja de relés, y de ahí a los motores piloto **PM1** y **PM2**, que mueven los árboles de levas **KD** y **RD** respectivamente, abriendo y cerrando los contactores de alta y de control de tracción.
- **PM1 mueve KD. PM2 mueve RD.**
- El árbol **KD** puede girar en ambos sentidos. El árbol **RD** solo puede girar en el sentido de aumentar muescas.
- Si la posición del regulador de mando no coincide con la posición de los árboles de levas, no hay tracción. Hay que reiniciar la secuencia: regulador en 0 y árboles de levas en **KD→FF** y **RD→P1**.
- Para mover los árboles de levas a mano, cada motor piloto tiene un volante en el lado opuesto.

## Cofre de control / cofre de relés

- Está **bajo bastidor, en el lado izquierdo** del coche motor (en el sentido de la marcha). Dentro están los motores piloto PM1 y PM2, sus contactos (uno de los conjuntos de contactos se identifica como "PM2 RD" y el otro como "PM1 KD"), y las resistencias que se van eliminando según avanza la secuencia.

## Tabla de tracción (combinador → KD/RD → muesca)

| Posición combinador | KD | RD | Muesca |
|---|---|---|---|
| 0 | FF | P1 | OFF |
| M | FF | P5 | P5 |
| S | FF | P13 | P13 |
| SS1 | WF2 | P13 | SWF2 |
| SS2 | WF4 | P13 | SWF4 |
| P | FF | P21 | P21 |
| PS1 | WF1 | P21 | WF1 |
| PS2 | WF2 | P21 | WF2 |
| PS3 | WF3 | P21 | WF3 |
| PS4 | WF4 | P21 | WF4 |

*Nota: "P21" de esta tabla es una posición del combinador de tracción (una muesca), no una llave neumática — no confundir con la llave B-21 de la TDP (ver Puntos a contrastar).*

## Tabla de frenado (posición → KD/RD → muesca)

| Posición | KD | RD | Muesca |
|---|---|---|---|
| 1 | BF1 | B1 | BF1 |
| 2 | BF2 | B1 | BF2 |
| 3 | BF3 | B1 | BF3 |
| 4 | BF4 | B1 | BF4 |
| 5 | BFF | B1 | B1 |
| 6 | BFF | B2 | B2 |
| 7 | — | B3 | B3 |
| 8 | — | B4 | B4 |
| … | — | … | … |
| 17 | BFF | B13 | B13 |
