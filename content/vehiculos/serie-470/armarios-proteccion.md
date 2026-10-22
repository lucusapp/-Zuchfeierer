---
title: "Armarios BT y panel de defectos"
summary: "Panel de defectos del Cm, magnetotérmicos de los armarios BT del Cm y del Rc, antibloqueo y climatización."
order: 8
tags: ["armario BT", "panel de defectos", "magnetotérmicos", "antibloqueo"]
meta: {}
---

## Diferencia entre el armario BT del Cm y el del Rc

Solo en el armario BT del **Cm** están el panel de defectos, el by-pass del HM y el mando del compresor auxiliar. El armario BT del **Rc** no los tiene.

## Panel de defectos (armario BT del Cm)

Señaliza, lumínica y acústicamente, las protecciones del circuito de alta. Cualquier señal en este panel abre el disyuntor extrarrápido **HB**:

- **Reset**: cese de la sonería.
- **MMOCD1**: sobreintensidad en los motores 1 y 2.
- **MMOCD2**: sobreintensidad en los motores 3 y 4.
- **DFD**: diferencial (total) del circuito de tracción.
- **MGOCD / MGDFD**: diferencial del GMA — la chuleta usa las dos siglas en sitios distintos para lo mismo; no está confirmado cuál es la correcta (ver Puntos a contrastar).
- **MGRPB**: botón rojo de rearme por sobreembalamiento del GMA (cuando supera las 1.800 rpm).

*La 470 no incluye un relé de velocidad nula en este panel — a diferencia de lo registrado para la 448, en la chuleta de la 470 no aparece ese dispositivo.*

## Magnetotérmicos del armario BT del Cm

- **CCN**: circuito de control.
- **PMN**: motor piloto.
- **PMN** (otro): freno y circuito de lazo.
- **ACPN**: compresor auxiliar.
- **IAG**: alumbrado principal.

**Interruptores**: compresor auxiliar ("gorrinillo"), sustitución de proyectores, anulación de bandas de alumbrado del Cm.

**Contactores**: freno de patín, alumbrado principal.

## Magnetotérmicos del armario BT del Rc

- **BATN**: batería.
- **MGCN**: circuito de control de arranque del grupo (GMA).
- **MGN2**: circuitos de corriente alterna y alumbrado.
- **2129**: freno y circuito de lazo.
- **CPMN**: compresor principal.
- **IAG**: alumbrado principal.

**Interruptores**: sustitución de proyectores, anulación de bandas de alumbrado del Rc.

**Contactores**: compresor, freno de patín, alumbrado principal.

En la parte inferior de este armario están los dispositivos de antiblocaje.

## Frenado y antibloqueo

- Dispositivos antiblocaje, uno por bogie: regulan la presión del cilindro de freno según la adherencia rueda-carril, controlada en cada eje por generadores.
- La tubería **B12** lleva aire desde el calderín (depósito B29) hasta las válvulas antibloqueo, situadas antes de los cilindros de freno.
- **Purga**: las válvulas antibloqueo tienen pulsadores ("piu-piu") y las unidades KBR/FM3 tienen cadenillas, para vaciar el aire a mano.

## Climatización (armarios de A/A)

- Tres equipos independientes, uno por coche, más los de las cabinas. Cada uno en un armario:
  - **Coche motor**: en el furgón, enfrente del equipo general del ASFA.
  - **Remolque intermedio**: testero izquierdo de la sala de viajeros más cercano al coche motor.
  - **Remolque con cabina**: testero izquierdo de la sala de viajeros más cercano al remolque intermedio.
- Se alimenta a través del convertidor, a 380 Vca/50 Hz. Las resistencias de calefacción dependen del sistema de aire acondicionado.
- Panel de mando (lo rige la cabina habilitada): indicador de cabina habilitada, selección de temperatura de cabina, puesta en marcha del A/A de cabina, puesta en marcha del A/A de viajeros (solo arranque, no regula temperatura).
- Ante avería de un termostato, un conmutador de tres posiciones permite puentearlo ("emergencia calefacción" / "emergencia refrigeración"). Es solo una solución puntual: mantenerlo así puede provocar la parada del convertidor estático por sobretemperatura.
