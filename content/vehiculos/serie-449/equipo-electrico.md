---
title: "Equipo eléctrico"
summary: "Captación, tracción, cuadros, protecciones y baterías."
order: 1
tags: ["eléctrico"]
meta:
  catenaria: "3.000 Vcc"
  aux: "400 Vca trifásica"
  enchufes: "230 Vca monofásica"
  control: "72 Vcc"
---

## Tensiones del tren

- Catenaria: **3.000 Vcc**
- Servicios auxiliares: **400 Vca** trifásica
- Enchufes de viajeros: **230 Vca** monofásica
- Control y batería: **72 Vcc**

## Arquitectura general

Tracción de **corriente alterna trifásica** con motores asíncronos y electrónica de potencia. **Dos cadenas de tracción y frenado independientes e idénticas**, cada una alimenta 3 motores: prácticamente todo el equipo va doblado para poder seguir en modo degradado si falla un elemento.

![Circuito de potencia: pantógrafos, disyuntores, filtro de entrada, convertidor de tracción, convertidor de auxiliares y motores por coche](vehiculos/serie-449/circuito-potencia.webp)

![Circuito de alimentación con leyenda: pantógrafos, pararrayos, SP, SD, DY, TCU, ACU, FR, RF y motores por coche](vehiculos/serie-449/circuito-alimentacion-leyenda.webp)

Cadena A1 (izquierda): pantógrafo A4 → disyuntor → filtro entrada A1 → TCU A1 → 1 motor en A1 + 2 motores en A4.
Cadena A2 (derecha): pantógrafo A5 → disyuntor → filtro entrada A2 → TCU A2 → 1 motor en A2 + 2 motores en A5.

## Pantógrafos

Dos pantógrafos, en **A4** y **A5**, accionados desde botonera de cabina (pulsadores Nº1 y Nº2). Pantógrafo 1 = el más próximo a la cabina activa; pantógrafo 2 = el del extremo opuesto. La orden se transmite por COSMOS a todos los pantógrafos del mismo tipo en la composición.

**El sistema no permite subir ambos pantógrafos a la vez, salvo en MODO SOCORRO.**

Cada pantógrafo lleva un pararrayos asociado.

> 🖼️ *Imagen 12: botonera del pupitre con los pulsadores de pantógrafo Nº1/Nº2, disyuntores, batería, alumbrado, etc.*

## Seccionadores

- **Seccionadores de pantógrafo (SP)**: uno junto a cada pantógrafo, aíslan del circuito de 3 kV. Se accionan con el conmutador Nº8 del armario BT de cabina.
- **Seccionadores de puesta a tierra (P.A.T.)**: dos, permiten puesta a tierra simultánea de toda la cadena de tracción correspondiente y su ACU.
- **Seccionador de distribución (SD)**: **único en todo el tren** (coche A3), situado **después de los pantógrafos y antes de los disyuntores**. Normalmente **cerrado** (conecta ambas cadenas de 3 kV entre sí). Se acciona siempre con **batería conectada y pantógrafos bajados**. Aísla eléctricamente el semitrén con la derivación (TCU + ACU), dejando el otro semitrén con 50% de tracción/freno eléctrico y 100% de auxiliares.
  - **En simple:** no hace falta cambiar de cabina — se acciona el SD y se sube el pantógrafo del semitrén útil desde la propia cabina.
  - **En mando múltiple:** si la derivación está en la unidad acoplada, sí hay que cambiar de cabina e ir a esa unidad para accionar su SD.

## Disyuntores

Extrarrápidos, uno por cadena, en los cofres de alta tensión de A4/A5. Conectan el pantógrafo activo con el TCU correspondiente (A1/A2). Soplado electromagnético para el arco + apertura rápida indirecta ante armónicos u otras anomalías. Se conectan/desconectan desde la botonera de cabina.

## Filtro de entrada

Uno por coche A1/A2, a la entrada de cada TCU. Reduce armónicos hacia catenaria y estabiliza la alimentación del convertidor (hace de circuito intermedio junto con bobinas/condensadores internos del TCU).

## Convertidores de tracción (TCU)

Uno en A1 y otro en A2, bajo bastidor. Cada uno aporta el **50% de la tracción y del freno eléctrico** total. Incluyen ondulador (frenado regenerativo), chopper de frenado, protecciones, refrigeración (ventilación forzada por tubería de calor) y control (IGBT, tecnología IPM, 6,5 kV tensión inversa). **No hay pulsador para habilitar/deshabilitar el TCU** — solo se puede desconectando el disyuntor.

## Resistencias de frenado

Una por cadena, en el techo de los coches extremos. Disipan la energía de frenado que la catenaria no puede absorber (frenado reostático).

## Motores de tracción

6 en total (1 en A1, 1 en A2, 2 en A4, 2 en A5). Asíncronos trifásicos, jaula de ardilla, completamente cerrados (refrigeración interna sin contacto con aire exterior) con autoventilación.

## Modos de conducción (COSMOS)

**COSMOS** es el ordenador central de mando y control (CCU), basado en protocolo TCN: supervisa tracción, frenado y el resto de sistemas embarcados.

- **Velocidad prefijada** (modo normal): el maquinista fija la velocidad deseada y el sistema regula tracción/freno para mantenerla.
- **Manual**: el maquinista controla directamente tracción y freno con el manipulador — poca precisión a partir de cierta velocidad.

Frenado: prioridad al **regenerativo** (devuelve energía a catenaria); si la red no la absorbe, pasa a **reostático** (resistencias de freno).

## Convertidores de servicios auxiliares (ACU)

Dos, idénticos e independientes, bajo bastidor de A4 y A5. Transforman alta tensión de catenaria en media/baja tensión (CA y CC) para todos los equipos y gestionan la carga de baterías automáticamente.

- Potencia nominal: **297 kVA** (24 kW para carga de baterías).
- Tensión nominal 3.000 V, operan entre 2.000-4.000 Vcc.
- Dos salidas: servicios auxiliares (compresor, WC, clima, refrigeración — 400 Vca III) y enchufes de tren (230 Vca).

## Baterías

Dos por unidad, 230 Ah, 55 elementos Ni-Cd, 72 V nominal. Sensor de temperatura PT100 de 4 hilos. Conexión/desconexión desde botonera de cabina.

*Nota de seguridad: si se pulsa por accidente la desconexión de batería con el tren en movimiento, no actúa a no ser que se mantenga pulsado — primero abre disyuntor y baja pantógrafo. Igual comportamiento si se pulsa "bajar pantógrafo" sin antes desconectar el disyuntor.*

Para procedimientos de avería de cada uno de estos elementos, ve a **Averías**.
