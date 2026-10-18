---
title: "Equipo eléctrico"
summary: "Circuito de alta, convertidor estático, batería y circuito de control."
order: 1
tags: ["eléctrico", "pantógrafo", "disyuntor", "batería"]
meta: {}
---

> No tiene valor reglamentario.

## Circuito de alta (captación y tracción)

Capta los **3.000 V** de catenaria, los distribuye a la tracción y transforma parte para los auxiliares y el control. Elementos:

- Dos **pantógrafos** (PAN1 / PAN2) y **pararrayos** de alta tensión (Arr1 / Arr2).
- **Seccionadores de puesta a tierra** PGS1 / PGS2.
- **Disyuntor extrarrápido HB**.
- **Seccionador del equipo de tracción MS**.
- Dos **seccionadores de pantógrafos** PANS1 / PANS2.
- **Contactores de línea** L1, L2, L3, L4.
- **Seccionadores de los motores** MCOS1 / MCOS2.
- Resistencias de arranque y de shuntado.
- Motores de tracción M1, M2, M3, M4.
- Convertidor estático.

Protecciones del circuito de alta: sobreintensidad de motores y diferenciales. Todas se señalizan en el **panel de defectos** del armario BT del Cm (ver [Cabina y armarios BT](#/vehiculos/serie-448/cabina-armarios)), y cualquier señal en ese panel **abre el disyuntor HB**. Indicaciones:

- **MMOCD1**: sobreintensidad en motores 1-2.
- **MMOCD2**: sobreintensidad en motores 3-4.
- **DFD**: diferencial total del circuito de tracción.

*Qué significa "diferencial total":* a diferencia de MMOCD1/MMOCD2, que vigilan la sobrecorriente de una pareja de motores en concreto, el DFD vigila **todo el circuito de tracción en conjunto** (motores, resistencias y cableado de alta), comparando lo que entra con lo que sale. Si no cuadra, es que hay corriente escapándose a la carcasa/masa del tren en algún punto — un fallo de aislamiento — y "total" indica que la protección avisa de que existe esa fuga en algún sitio del circuito de alta, sin decir exactamente dónde. Ver el procedimiento en caso de que salte en [Averías → El disyuntor se abre al establecer tracción](#/vehiculos/serie-448/averias).

## Convertidor estático

Transforma los 3.000 Vcc de catenaria en:

- **220 Vca / 50 Hz**: alumbrado principal de viajeros, motores piloto, motor del compresor, climatización, ventiladores de resistencias, WC de vacío, etc.
- **72 Vcc**: cargador de batería y servicios auxiliares.

Está en el remolque con cabina (Rc). Alimenta el compresor principal a 220 Vca / 50 Hz.

## Batería y circuito de control

- Batería bajo bastidor del **Rc**. Tensión máxima **72 Vcc**, mínima **60 Vcc**.
- El **circuito de control** relaciona el equipo de mando con el accionamiento del circuito de potencia y verifica las secuencias.
- Equipo de mando: pulsador de prueba de lámparas (PLS1/2), regulador de mando (desde "0" hasta "PS4"), inversor de marcha (AT, 0, AD), interruptor de gran aceleración (HASL1/2), maneta de freno, interruptores del circuito de control (CCOS1, CCOS2 — ver más abajo), motores piloto PM1 y PM2, bloque CLD (detector limitador de corriente) y bloques SSC (KD) y SSC (RD).

**CCOS1 y CCOS2** (Conmutador/disyuntor de Control de Servicios 1 y 2):

- **CCOS1**: interruptor de mando de los **motores de tracción y de las resistencias de freno**. Es importante. Se actúa sobre él para evitar que les llegue la orden de tracción.
- **CCOS2**: gobierna el segundo grupo de servicios auxiliares/confort (alumbrado interior de reserva, climatización/calefacción por zonas, lógicas secundarias de los coches remolque).
- Se operan manualmente, por el personal de conducción o mantenimiento, para aislar una avería eléctrica o rearmar tras un disparo por sobrecorriente, evitando que un fallo en un servicio secundario deje al tren totalmente inútil en vía.

Para la batería baja al tomar la unidad en sencillo, ver Averías.
