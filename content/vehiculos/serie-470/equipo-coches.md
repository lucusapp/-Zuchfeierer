---
title: "Equipos por coche"
summary: "Qué lleva el coche motor, el remolque intermedio y el remolque con cabina de la 470."
order: 1
tags: ["coches", "compresor", "presostato", "GMA", "convertidor"]
meta: {}
---

## Coche motor (Cm)

- Dos **pantógrafos**, la **cámara de alta**, los enclavamientos de la **puesta a tierra**, cabina con **armario BT**, **armario del depósito de reserva**, **armario del aire acondicionado del Cm**, cuatro **motores de tracción**, bloques de resistencias, **cofre de relés y motores piloto** de los árboles de levas, areneros, equipo de freno y patines, y freno de estacionamiento.
- **Presostato de mínima** (único de la unidad, en el circuito de lazo): cierra a 8,5 bar y abre a 6,5 bar.
- Todo el equipamiento neumático está concentrado del lado izquierdo (panel neumático parcial, cofre de control) y el eléctrico del lado derecho (contactores de línea, resistencias L2) — ver Llaves neumáticas y distribuidores.

## Remolque intermedio (Ri)

- **Convertidor estático**: aquí está, no en el Rc. Proporciona 380 Vca/50 Hz para el resto de servicios auxiliares (aire acondicionado, vacío del WC, autotransformador).
- **Magnetotérmicos del aire acondicionado** del propio coche.
- Zona de servicios, plaza PMR, armario de BT y freno de estacionamiento.
- El térmico más a la derecha del armario de aire acondicionado del Ri está compartido entre el aire acondicionado del Rc y el autotransformador.

## Remolque con cabina (Rc)

- Cabina de conducción con un pupitre idéntico al del Cm.
- **Cofre de baterías**, **Grupo Motor Alternador (GMA)**, **cofre de control del GMA** (con el contactor **MGL**), **cofre del regulador de tensión y frecuencia** (AVR/AFR) del GMA, **compresor principal**, cofre de los contactores de la calefacción, **autotransformador**, arenero, equipo de freno y patines, y freno de estacionamiento.
- El GMA y el autotransformador están en el lado derecho del Rc según unas referencias de la chuleta, y en el lado izquierdo bajo bastidor según otra — no está confirmado cuál es correcto (ver Puntos a contrastar).
- **Compresor principal**: bajo bastidor, suministra 1.400 l/min, con válvula de seguridad contra sobrepresiones.
- **Magnetotérmico de batería (BatN)**: está aquí, en el armario BT del Rc — en la 470 no hay magnetotérmico de batería en cabina (a diferencia de la 448).

## GMA — Grupo Motor Alternador

- Transforma los 3.000 Vcc de catenaria en 220 Vca/50 Hz para los servicios auxiliares: alumbrado principal, motores piloto, y el cargador de batería (que a su vez produce 72 Vcc rectificados para cargar la batería y alimentar otros servicios sin consumirla).
- Protecciones del GMA: sobreintensidad en los motores de accionamiento (derivación → MGDF abre extrarrápido; sobrecarga → QMG abre extrarrápido), embalamiento (más de 1.850 rpm → MGOSD para el GMA), sobretensión en bornes del alternador (más de 240 Vca → MGOVD para el GMA).
- El **MGN3** (magnetotérmico tripolar) es el único interruptor automático bajo bastidor; protege el regulador de tensión AVR. Si se desconecta, el GMA deja de producir corriente alterna.
- Si el GMA se sobreembala (más de 1.800 rpm), hay que rearmar con el interruptor **MGRPB** (panel de defectos del Cm) o el térmico **MGCN** (armario BT del Rc), según desde qué cabina se esté conduciendo.

## Autotransformador

- En caso de avería del GMA, asume la alimentación de los servicios auxiliares transformando los 380 Vca/50 Hz del convertidor estático en 220 Vca/50 Hz. Su funcionamiento es automático.
- La tracción sigue funcionando con normalidad; lo que se reduce es la potencia del aire acondicionado, al 50%.
