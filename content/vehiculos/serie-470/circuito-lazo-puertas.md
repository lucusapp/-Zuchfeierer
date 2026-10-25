---
title: "Circuito de lazo y puertas exteriores"
summary: "Dispositivos del lazo, by-pass de hilo de lazo, bloqueo/desbloqueo de puertas y by-pass de puertas."
order: 10
tags: ["circuito de lazo", "puertas", "by-pass", "HM"]
meta: {}
---

## Circuito de lazo

El circuito de lazo queda establecido al llevar el inversor a la posición AD o AT. Mantiene la alimentación de: las electroválvulas I-II-III de cada una de las tres KBR, el relé auxiliar del freno de patín (RAFP), el relé de emergencia (ER) y el relé de emergencia de areneros (REA). Si falta alimentación a cualquiera de ellos, se provoca una frenada de urgencia.

Dispositivos que intervienen:

- **Presostato de mínima** (único, en el coche motor): cierra a 8,5 bar, abre a 6,5 bar.
- **Presostato KBR** (uno por coche, tres en total): cierra a 6,5 bar, abre a 5,7 bar.
- **Fusible de 2 A** (uno por cabina): activo el de la cabina habilitada.
- **Magnetotérmico de freno** de la cabina habilitada (2i28 en el Cm, 2i29 en el Rc).
- Aparatos de alarma de la sala de viajeros.
- Dispositivo **HM** (hombre muerto).
- Enclavamiento de final de carrera del Scharfenberg.
- **ASFA**: hay que desconectar el conmutador de conexión y el de anulación del equipo de la cabina no habilitada. El equipo ASFA recibe alimentación a través de dos enclavamientos de los relés de control: excitado el de la cabina habilitada, desexcitado el de las no habilitadas.
- Conmutador de control de positivos/negativos en posición marcha, en la cabina habilitada.

## By-pass de hilo de lazo

Permite seguir circulando con ciertas limitaciones cuando se han activado: los presostatos de las KBR de toda la composición, los finales de carrera del Scharfenberg, o la alarma de viajeros.

- Interruptor precintado en el panel superior del techo de cabina: al accionarlo, permite seguir 30 segundos. Para más tiempo, o si se acciona el conmutador de puertas, hay que volver a darle tantas veces como haga falta.
- Tiene un piloto indicador en el mismo panel.

## Puertas exteriores

Cuatro puertas de acceso por coche (dos a cada lado), con dos hojas deslizantes, mando eléctrico y accionamiento neumático, y un estribo fijo. Se accionan con pulsadores interiores y exteriores, manteniéndolos pulsados hasta la apertura o cierre completos.

**Bloqueo de una puerta fuera de servicio:**

1. Asegurar que las hojas están cerradas; si no, cerrarlas a mano.
2. Girar, en sentido antihorario, el enclavamiento mecánico situado en medio de las hojas (parte superior) con la llave de cuadradillo — bloquea mecánicamente ambas hojas.
3. Colocar la pegatina de "puerta fuera de servicio" y comunicar al Centro de Gestión el número de puertas fuera de servicio y su posición en la composición.

- **Desbloqueo interior**: llave en la parte superior derecha de cada puerta.
- **Desbloqueo exterior**: dos llaves bajo el bastidor de cada coche, una por cada lateral.

Lo único que da "puertas cerradas" en el pupitre es el final de carrera de la parte superior de cada hoja — no el macho de puerta. Por eso se puede tener el macho tirado y aun así lucir puertas cerradas (al entrar en un túnel, por ejemplo); solo si un viajero abre físicamente la puerta se corta la tracción y se marca puerta abierta, y vuelve a marcar puertas cerradas hasta que alguien pulse el botón de apertura, aunque ya se haya dado la orden de abrir.

## Circuito de lazo de puertas y by-pass de puertas

Un piloto/zumbador (lámpara **LPA**, zumbador **ZL**) se ilumina en rojo cuando hay una puerta abierta y se intenta traccionar (o si se abre una puerta en marcha), impidiendo la tracción.

- **By-pass de puertas (BP)**, dos posiciones:
  - **Inactivo**: funcionamiento normal.
  - **Activado**: permite traccionar con una puerta abierta, o ante un fallo del sistema. Ver el procedimiento completo de avería en [Averías → Avería en el circuito de puertas](#/vehiculos/serie-470/averias).
- El sistema chequea en serie los finales de carrera de puertas cerradas de toda la unidad: si uno no hace contacto, da puertas abiertas. Ni el selector de puertas de cabina ni el macho de la puerta dan, por sí solos, la señal de puerta abierta — solo el final de carrera.
