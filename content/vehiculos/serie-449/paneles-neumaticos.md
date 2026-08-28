---
title: "Paneles neumáticos y condena de frenos"
summary: "Los 7 paneles físicos del tren, ubicación y llaves accionables en cada uno."
order: 4
tags: ["neumático", "paneles", "llaves", "consulta rápida"]
meta: {}
---

Referencia de ubicación física de cada panel y sus llaves. Útil para localizar rápido dónde actuar ante una avería (ver también **Averías** para el procedimiento paso a paso).

> 🖼️ *Imagen 18: plano completo de todos los paneles del tren (lila = puertas, azul = paneles neumáticos, naranja = cofres de media tensión, rojo = cofres de puesta a tierra/magnetotérmicos).*

Código de colores del plano general: **azul** = paneles neumáticos · **naranja** = cofres de media tensión · **rojo** = cofres de puesta a tierra y magnetotérmicos de batería · **lila** = puertas de acceso.

## Situación de cofres — semitrén A1-A2

![Situación de cofres y paneles del semitrén A1-A2: Panel de Auxiliares, Sifa, Dotación, Panel Generación de TFA y Panel Auxiliar de freno](vehiculos/serie-449/situacion-cofres-a1-a2.svg)

*(Falta la mitad A4-A3-A5-A2 del esquema — la añado en cuanto me pases esa imagen.)*

## 1. Panel Generación de TFA — A1/A2, lado izquierdo

Uno en cada coche extremo (idénticos), en el faldón izquierdo en sentido de la marcha. El manual numera hasta 20 elementos en la foto de este panel, pero de todos ellos solo importan dos para el maquinista:

- **Nº8 Válvula relé**: crea la TFA a partir de la TDP. En caso de fuga, pasar al otro panel o a freno de auxilio.
- **Nº6 Llave de aislamiento del panel de TFA**: cierra para evitar una fuga completa de TFA por este panel.

> 📷 *Pendiente: foto real del panel (Imagen 20) con los 20 puntos numerados — la añado en cuanto me pases el archivo de imagen; no la redibujo a mano porque aquí sí importa la posición física exacta.*

## 2. Panel de control del pantógrafo — A4/A5, lado izquierdo (último panel del coche)

Un panel por pantógrafo (A4 y A5). Contiene las electroválvulas (07/1) con las que el COSMOS sube el pantógrafo correspondiente.

- **Nº8/1 Llave de aislamiento de pantógrafo**: única llave accionable; anula neumáticamente el pantógrafo (ver Equipo eléctrico).

## 3. Panel de freno TFA — A4/A5, lado derecho (inicio del coche)

El panel más importante para el frenado neumático. Aquí se materializa la demanda del manipulador: las TCU dan freno eléctrico, la BCU crea la TFA constantemente y aplica presión a los cilindros de freno vía TDP según lo que falte por cubrir. La TFA en sí no se usa para frenar en modo normal — sirve de bucle de control entre presión pedida y presión real en los cilindros (excepto en canal de freno indirecto: fallo de BCU o remolque).

Llaves accionables:
- **Nº5** Aislamiento freno de estacionamiento, **bogies compartidos**.
- **Nº6** Aislamiento arenero bogie extremo (el arenero de bogies compartidos usa la llave del panel de areneros del A3).
- **Nº7/1** Aislamiento suspensión bogie compartido A4/A3 (fuga de balonas) — sin límite de velocidad, pero pérdida de confort.
- **Nº7/2** Aislamiento suspensión bogie compartido A1-A4 // A2-A5 — igual, sin límite de velocidad, pérdida de confort.
- **Nº10/1** Aislamiento cilindros de freno **ejes remolques** (vacía esos cilindros de la mitad del tren correspondiente).
- **Nº10/2** Aislamiento cilindros de freno **ejes motores** (ídem).

Recordatorio de agrupación de ejes (no se anula por bogie ni por eje suelto, sino de 3 en 3):
- Remolques: EJES 1,2,6 // 7,11,12 (llave 10/1)
- Motores: EJES 3,4,5 // 8,9,10 (llave 10/2)

## 4. Panel auxiliar de freno — A1/A2, lado izquierdo (final del coche)

No confundir con el "panel de auxiliares" (nº6). Cubre lo que el panel de freno TFA no cubre para los **bogies extremos**:

- **Nº5** Aislamiento freno de estacionamiento (bogie extremo).
- **Nº7** Aislamiento de suspensión (bogie extremo).
- **Nº10** Válvula de impulsos del freno de estacionamiento: accionada manualmente introduce aire en los cilindros (si hay aire en TDP), aflojando el freno de estacionamiento.

## 5. Paneles de freno EP-Compact — A4/A5, lado izquierdo

Dos EP-Compact por coche, prácticamente idénticos: uno para ejes motores, otro para ejes remolques. Actúan como "ordenador central" de freno de esa mitad (parte de la BCU), con:

- **Módulo CP-C**: aplicación del freno de ejes motores de la mitad del tren.
- **Módulo CP-P**: freno de estacionamiento de **bogies intermedios**.
- **Módulo CP-M**: areneros del bogie extremo.
- **DCL**: convertidor electroneumático — presión de referencia → presión a cilindros de freno (canal de freno directo, el normal). En canal indirecto (fallo BCU o remolque) se usa la TFA con distribuidor.
- **EDU**: válvula de carga variable según balonas.
- Electroválvulas de urgencia (canal independiente, inversas: al desexcitarse dan presión máxima a los C.F.).

El EP-Compact de **ejes motores** tiene además el cuadradillo para anular/apretar/desapretar el **freno de estacionamiento de bogies compartidos**.

**Resumen de anulación de frenos:**
- Servicio: de 3 en 3 ejes, diferenciando motor/remolque, llaves 10/1 y 10/2 del panel de freno TFA.
- Estacionamiento bogie extremo: llave Nº5 del panel de freno TFA (o panel auxiliar de freno en A1/A2).
- Estacionamiento bogie compartido: cuadradillo del EP-Compact.

## 6. Panel de auxiliares — interior de cabina (A1/A2, lado izquierdo del pupitre)

Resuelve fugas puntuales:
- **02/1** Condena del desacoplador (fuga por Scharfenberg no solucionable con la llave propia del enganche).
- **02/2** Condena del silbato agudo.
- **02/3** Condena de la bocina grave.
- **02/4** Condena del retrovisor derecho.
- **02/5** Condena del retrovisor izquierdo.
- **02/6** Condena del engrasador de pestaña.

En el mismo espacio, tres llaves importantes:
1. **Válvula SIFA** (electroválvula de emergencia): llave de aislamiento en caso de fuga; en remolque deben cerrarse las dos del tren (una por cabina).
2. Apertura manual de trampilla.
3. Llave de la junta hinchable de la puerta.

## 7. Panel de arenado — A3, lado derecho mirando a A1

Único panel de este tipo en el tren (situado en A3, donde también están el intercambiador de llaves y el cofre de mando de batería).

4 ejes con arenado: **1, 6, 7 y 12** (solo actúan los del sentido de la marcha; curiosamente solo tienen arenero los ejes remolques). A tren parado solo se permite 1 eyección de prueba; en marcha, a partir de 3 km/h.

- Ejes 6 y 7 (bogies intermedios): gestionados desde este panel del A3. **Llave 01** cierra el paso a estos dos areneros.
- Ejes 1 y 12: gestionados por el EP-Compact de ejes motores; se aíslan con la **llave 06 del panel de freno TFA**.

## Llaves de aislamiento de TDP y TFA (no panelizadas)

Situadas bajo bastidor entre coches (ver plano). Permiten aislar tramos de Tubería de Freno Automático o Tubería del Distribuidor Principal fuera de los paneles anteriores — de uso menos frecuente pero a tener localizadas.
