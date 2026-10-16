---
title: "Cabina y armarios BT"
summary: "Situación de los armarios y los elementos más importantes del armario BT del coche motor."
order: 7
tags: ["cabina", "armario BT", "magnetotérmicos"]
meta: {}
---

> Fuente: Chuleta 448 (Dpto. de Formación de Tarragona). Referencia de localización; los números de cada elemento corresponden a las fotos del documento.

## Situación de aparatos

**Coche motor (Cm)**: dos pantógrafos, cámara de alta, enclavamientos de puesta a tierra, cabina con su armario BT (con panel de defectos), armario de depósito de reserva, armario neumático (freno y areneros), panel neumático, cuatro motores de tracción, bloques de resistencias y ventiladores, cofre de relés y motores piloto de los árboles de levas, equipo de freno y patines con freno de estacionamiento.

**Remolque intermedio (Ri)**: armario BT, armario Stone, equipo de freno y patines, WC de vacío y sus llaves neumáticas.

**Remolque con cabina (Rc)**: cabina con pupitre idéntico al del Cm, cofre de baterías, cargador de baterías, convertidor estático, compresor principal, equipo de freno y arenado, patines y freno de estacionamiento.

## Armario BT del Cm, serie baja — foto numerada (448000–448011)

![Armario BT, serie baja, numerado del 1 al 17](vehiculos/serie-448/armario-bt-serie-baja.webp)

Numeración según la foto del armario. Junto a la descripción literal de la chuleta se añade, en cursiva, una aclaración de qué hace cada elemento en la práctica (no es texto de la chuleta, es una ayuda de estudio).

> La foto numera hasta el **17**.

1. **By-pass de puertas.** Al accionar el conmutador se ilumina la lámpara testigo, eliminando del circuito de tracción las cuatro puertas del coche y su intervención en el circuito de lazo. **Atención:** con el by-pass activo hay tracción y se podría circular con las puertas abiertas.
   *Qué hace: es un "puente" de seguridad que anula la vigilancia de que las 4 puertas de ese coche estén bien cerradas, para que el tren pueda moverse igualmente. Solo se usa si una puerta no cierra y hay que mover el tren.*

2. **CPP15 — Pulsador Anulación Velocidad Nula.** Al pulsarlo excita la bobina del Relé Temporizado Anulación Velocidad Nula (RPT11, punto 4).
   *Qué hace: es el botón que pulsa el maquinista a mano para "desbloquear" el sistema de puertas cuando el relé de velocidad nula (punto 3) no se ha excitado solo.*

3. **RVN1 — Relé Velocidad Nula 1.** Se excita al circular a velocidad inferior a 3 km/h. Da señal al sistema de apertura de puertas: una vez detenido el tren y accionados los conmutadores del pupitre que autorizan las bandas de puertas, los pulsadores se iluminan y se puede proceder a abrir o cerrar la puerta. También permite la apertura de puertas al actuar sobre la llave de socorro o desbloqueo.
   *Qué hace: es el relé que "sabe" si el tren está prácticamente parado (menos de 3 km/h). Mientras no se excite, el sistema no deja abrir puertas — es la protección básica contra abrirlas en marcha.*

4. **RPT11 — Relé Temporizador Anulación Velocidad Nula (6').** Al excitarse por el pulsador CPP15 (punto 2) o por el pulsador verde existente bajo la capota de cada puerta, elimina el bloqueo de puertas que provoca el Relé de Velocidad Nula [RVN1 (BT)] cuando, por anormalidad, no se ha excitado circulando a menos de 3 km/h. Existe uno en cada armario BT de cada cabina y complementa al pulsador verde.
   *Qué hace: es el "plan B" de 6 minutos — si por algún fallo el relé de velocidad nula no confirma que el tren está parado, este temporizador permite igualmente abrir puertas durante ese tiempo.*

5. **Resistencias del faro:**
   - 5.1 — **1r6**, resistencia de protección del faro.
   - 5.2 — **1r4**, resistencia de reducción del faro.
   - 5.3 — **1r8**, resistencia de sustitución del faro.
   *Qué hacen: las tres están en el circuito del faro delantero — una limita/protege la corriente, otra reduce su intensidad luminosa y la tercera sustituye a otra si hace falta.*

6. **Magnetotérmicos (de izda. a dcha.):**
   - **1e20** — Magnetotérmico IRIS.
   - **5e8TT** — Magnetotérmico Tren Tierra.
   - **Interruptor telemando batería** — alimenta la bobina del contactor de batería. Su disparo provoca la desconexión del circuito de batería al desexcitar la bobina del contactor. Se puede disparar manualmente o mediante el pulsador de telemando de batería existente en el panel frontal superior de las cabinas de conducción.
   - **Mando puertas exteriores (totalizador)** — protege el circuito de puertas exteriores del coche.
   - **Puertas exteriores izq. y dcha.** — protege el circuito de forma cruzada, una puerta lado derecho y otra lado izquierdo (puertas 1-4 y 2-3 del coche).
   - **Puertas interiores de intercomunicación** — protege las puertas de intercomunicación del coche.
   - **Megafonía** — protege el circuito de megafonía e IRIS.
   - **Estribos** — protege la iluminación de balizamiento de los estribos.
   - **Carga linternas** — protege los cargadores de linternas.
   *Qué hacen: son los térmicos de protección de cada circuito auxiliar del coche — si hay un cortocircuito o sobrecarga en puertas, megafonía, batería, estribos o linternas, salta solo el térmico de ese circuito concreto, sin afectar a los demás.*

7. **1d1 — Relé de Control.** Uno por cada cabina. Su bobina se excita al conectar el interruptor de control de pupitre de conducción de la cabina habilitada. Interviene en:
   - Alimentación del circuito de control de puertas.
   - Un enclavamiento para el sistema ASFA en servicio.
   - Un enclavamiento para el circuito de engrase de pestañas.
   - La alimentación del contactor de cola 1c9.
   - Dos enclavamientos para el freno de patín.
   - Un enclavamiento en reposo en cabina NO habilitada, para el equipo ASFA desconectado.
   *Qué hace: es el relé "maestro" de cada cabina — solo se excita cuando esa cabina queda habilitada para conducir, y desde ahí reparte alimentación o autorización a varios sistemas (puertas, ASFA, engrase, freno de patín, contactor de cola).*

8. **Panel de defectos** (MMOCD 1 y 2 — DFD — MGDFD — CCOS 2 y 1 — MGRPB).
   *Qué hace: agrupa en un único panel los térmicos/cortacircuitos de detección de anomalías de varios equipos, para ver de un vistazo qué protección ha saltado. Qué es cada indicación de MMOCD1/MMOCD2/DFD: ver [Equipo eléctrico → Circuito de alta](#/vehiculos/serie-448/equipo-electrico).*

9. **Magnetotérmicos (de izda. a dcha.):**
   - **Baliza señalizadora.**
   - **Dass.**
   *Qué hacen: protegen el circuito de la baliza de señalización del tren y el del sistema DASS (ya mencionado como "by-pass DASS" en el pupitre de cabina — su significado exacto está en Puntos a contrastar).*

10. 
    - 10.1 — **1c9**, contactor de cola.
    - 10.2 — **CACPM**, contactor del compresor auxiliar.
    *Qué hacen: el contactor de cola conecta/desconecta la alimentación del extremo de cola de la unidad; el contactor del compresor auxiliar activa ese compresor cuando hace falta aire extra.*

11. **RBMK1 y RBMK2 — disyuntores integrales de los motores de los ventiladores de resistencias.** En series bajas dispone de contactores de motores ventiladores RMNK1 y RMNK2, y de los magnetotérmicos correspondientes RBMN1 y RBMN2 de alimentación a los motores de los ventiladores.
    *Qué hacen: protegen los motores que mueven los ventiladores de refrigeración de las resistencias de tracción/freno. Si uno de estos disyuntores salta, deja de enfriarse esa resistencia — coherente con lo ya registrado para la 470: si salta el térmico de un ventilador, el sistema corta la tracción por seguridad.*

12. **Magnetotérmicos (de izda. a dcha.):**
    - **PMN** — motores piloto, KBR, ER.
    - **RBMN1** — ventilador de resistencias 1.
    - **RBMN2** — ventilador de resistencias 2.
    - **PEXN** — premagnetización en freno eléctrico.
    - **CCN** — control.
    - **ACPN** — compresor auxiliar.
    - **PanN1** — pantógrafos.
    - **SdN1** — areneros.
    - **CPMKN1** — control del compresor.
    - **RBMKN1** — control de ventiladores de resistencias.
    - **MGSTKN1** — control del convertidor de servicios auxiliares.

13. **Magnetotérmicos (de izda. a dcha.):**
    - **5e8** — Tren Tierra.
    - **5e2** — electroválvula de bocina.
    - **5e9** — megafonía.
    *Nota: en el punto 6 aparece también un magnetotérmico de Tren Tierra (5e8TT). Puede ser el mismo elemento citado dos veces en la chuleta o dos térmicos distintos — ver Puntos a contrastar.*

14. **Magnetotérmicos (de izda. a dcha.):**
    - **1e53** — Alumbrado techo.
    - **5e1** — Antivaho.
    - **5e5** — Aspiradoras.
    - **1e2** — Freno KBR.
    - **1e5** — Memotel.
    - **1e9** — Contactor de cola.
    - **1e13** — Contactor freno de patín.
    - **1e14 y 1e15** — Alimentación patines y electroválvula de patines del 1º y 2º bogie.
    - **1e27** — Alumbrado testero.
    - **1e30** — GR3, dispositivo antideslizamiento.
    - **1e34** — Hombre muerto.
    - **1e36** — Señalización freno de mano.
    - **1e42** — Alumbrado pupitre.
    - **1e43** — Calienta pies y alumbrado cabina.
    - **5e17** — Alumbrado techo c.c.
    *Qué hacen: es la fila larga de térmicos de la foto, abajo a la izquierda — protegen iluminación (techo, testero, pupitre, cabina), antivaho, aspiradoras, el freno KBR y el freno de patín (contactor y electroválvulas), el hombre muerto, la señalización de freno de mano, el Memotel y el dispositivo antideslizamiento GR3.*

15. **5e13** — Sustitución del alumbrado de bandas.
    *Qué hace: entra en servicio si falla el magnetotérmico principal del alumbrado de las bandas luminosas de las puertas, para no perder esa iluminación.*

16. **1b23** — Sustitución de proyectores.
    *Qué hace: igual que el anterior pero para los proyectores (faros) — es el térmico de repuesto si falla el principal.*

17. **ACPS** — Compresor auxiliar.
    *Nota: el punto 12 ya tiene un "ACPN — Compresor auxiliar". Puede que ACPN y ACPS protejan partes distintas del mismo compresor auxiliar (p. ej. mando y potencia) — ver Puntos a contrastar.*

## Armario BT del Cm, serie alta

Organización similar en dos partes (superior e inferior). Diferencias clave:

- **1e6**: magnetotérmico del circuito de freno de lazo y del relé de control. Es **único en la serie alta (448012–448031)**.
- **1d5**: relé auxiliar de control de teleindicadores y del circuito de lazo (serie alta 12 a 31).
- Panel de relés de control del árbol de levas RD y temporizados de los ventiladores de resistencias.

## Equipos solo en el remolque con cabina (Rc)

- Físicamente, el Rc lleva el **compresor principal**, el **panel neumático** y el **secador de aire** (lado izquierdo), y el **cofre de baterías**, el **cargador** y el **convertidor estático** (lado derecho). El coche motor no los tiene.
- Para llegar al convertidor habría que poner la unidad a tierra y coger una de las **10 llaves** de la caja de llaves. No hay nada que hacer en el convertidor: basta con saber que está ahí.
- El **interruptor general de la batería** (el "gordo" de la batería) está en el **armario BT del Rc**.
- En cada cabina hay un **magnetotérmico** (telemando de batería) que actúa sobre ese interruptor general. Por eso, para poner en marcha la unidad, hay que ir al magnetotérmico de la cabina que se va a habilitar. Ver Encendido en Procedimientos.

## Armario Stone (aire acondicionado)

- Es el armario del **aire acondicionado** (climatización).
- En el coche motor está en la **cabina, en la parte izquierda**.
- Cada coche tiene su armario Stone con los equipos de climatización (la chuleta indica tres equipos independientes por coche).

## Cabinas de conducción (ambas series)

- **Combinador general ASFA**, **by-pass DASS**, mando de acoplamiento de unidad no reformada, telemando de batería, luz indicadora y conmutador de cambio de cabina.
- **Interruptor de anulación electrónica del HM**: solo en la cabina del Cm.
- Freno de estacionamiento de cada cabina, con su manómetro.
