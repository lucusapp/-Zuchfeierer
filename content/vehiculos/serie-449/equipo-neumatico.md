---
title: "Equipo neumático"
summary: "Los cinco sistemas de frenado y la producción de aire comprimido."
order: 3
tags: ["neumático", "frenos"]
meta:
  compresor_caudal: "950 l/min"
  presion_trabajo: "8,5-10 bar (máx. 11 bar)"
---

## Los cinco sistemas de frenado

### 1. Freno de servicio
Combina **freno eléctrico** (regenerativo o reostático) + **freno neumático**, ambos desde el manipulador. Gestionado por dos **BCU** (Brake Control Unit), una en A1 y otra en A2, cada una responsable de la mitad del tren. Si falla una BCU, el **WSP** (Wheel Slip Protection, antibloqueo) asume el control sin perder prestaciones.

- Entre 160 y 15 km/h: el neumático complementa al eléctrico si este no llega a cubrir la demanda.
- Si falla la TCU (sin freno eléctrico): la BCU asume todo el frenado neumático.
- Entre 0 y 15 km/h: **solo freno neumático**.

### 2. Freno de urgencia / emergencia
Completamente neumático, independiente del de servicio. Se activa con manipulador, seta de emergencia, tiradores de alarma, o automáticamente por sistemas de seguridad. Corta tracción de inmediato y aplica la máxima deceleración. Al accionarse desde la seta o el manipulador en posición máxima, suena la bocina (aguda y grave a la vez).

### 3. Freno de auxilio
Completamente neumático, mediante la **TFA** (Tubería de Freno Automático), como respaldo independiente. Ver detalle de límites de velocidad en Averías.

### 4. Freno de estacionamiento
Dos cilindros por bogie. No se puede aplicar a la vez que el freno de servicio. Indicadores visuales en los coches.

### 5. Freno de retención (hill holder)
Automático: si la velocidad baja de 3 km/h con el manipulador en posición de frenado, aplica un esfuerzo mínimo para no retroceder en pendiente. Se mantiene hasta que la tracción es suficiente para arrancar o se supera 3 km/h.

## Producción de aire comprimido

Dos equipos independientes (compresor rotativo de tornillo + tratamiento de aire), bajo bastidor de **A4 y A5**. Capacidad **950 l/min**, presión de trabajo 8,5-10 bar (soporta hasta 11 bar). Los 2 compresores los gestiona el COSMOS, normalmente a días alternos (ambos pueden trabajar juntos al encender el tren o cuando haga falta).

Tratamiento: secador autoregenerativo de doble torre + separador de aceite + purga.

**Compresores auxiliares** (2, alimentados por batería): generan la presión mínima para subir pantógrafos si no hay aire en el circuito principal. Depósito de reserva de 6 bar — si baja de ese valor, el COSMOS enciende los compresores auxiliares automáticamente.

El aire comprimido alimenta: frenado, suspensión neumática secundaria, estribos, accionamiento de pantógrafos (vía compresor auxiliar si hace falta), y equipos auxiliares (retrovisores, bocinas, areneros, engrase de pestaña).

Para el detalle de paneles físicos y llaves de aislamiento, ve al submenú **Paneles neumáticos**. Para procedimientos de avería, ve a **Averías**.
