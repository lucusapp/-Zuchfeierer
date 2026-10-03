---
title: "Equipo eléctrico"
summary: "Circuito de alta, convertidor estático, batería y circuito de control."
order: 1
tags: ["eléctrico", "pantógrafo", "disyuntor", "batería"]
meta: {}
---

> Fuente: Chuleta 448 (Dpto. de Formación de Tarragona). No tiene valor reglamentario.

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

Protecciones del circuito de alta: sobreintensidad de motores y diferenciales. Todas se señalizan en el **panel de defectos** del armario BT del Cm, y cualquier señal en ese panel **abre el disyuntor HB**. Indicaciones: MMOCD1 (sobreintensidad motores 1-2), MMOCD2 (sobreintensidad motores 3-4), DFD (diferencial total del circuito de tracción).

## Convertidor estático

Transforma los 3.000 Vcc de catenaria en:

- **220 Vca / 50 Hz**: alumbrado principal de viajeros, motores piloto, motor del compresor, climatización, ventiladores de resistencias, WC de vacío, etc.
- **72 Vcc**: cargador de batería y servicios auxiliares.

Está en el remolque con cabina (Rc). Alimenta el compresor principal a 220 Vca / 50 Hz.

## Batería y circuito de control

- Batería bajo bastidor del **Rc**. Tensión máxima **72 Vcc**, mínima **60 Vcc**.
- El **circuito de control** relaciona el equipo de mando con el accionamiento del circuito de potencia y verifica las secuencias.
- Equipo de mando: pulsador de prueba de lámparas (PLS1/2), regulador de mando (desde "0" hasta "PS4"), inversor de marcha (AT, 0, AD), interruptor de gran aceleración (HASL1/2), maneta de freno, interruptores del circuito de control (CCOS1, CCOS2), motores piloto PM1 y PM2, bloque CLD (detector limitador de corriente) y bloques SSC (KD) y SSC (RD).

Para la batería baja al tomar la unidad en sencillo, ver Averías.
