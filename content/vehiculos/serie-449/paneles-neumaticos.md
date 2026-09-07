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

## Situación de cofres — tren completo

![Situación de cofres del tren completo: A1-A2 (rojo), A4-A5 (verde) y A3 (azul), con todos los paneles y llaves](vehiculos/serie-449/situacion-cofres-completo.webp)

## 1. Panel Generación de TFA — A1/A2, lado izquierdo

Uno en cada coche extremo (idénticos), en el faldón izquierdo en sentido de la marcha. El manual numera hasta 20 elementos en la foto de este panel, pero de todos ellos solo importan dos para el maquinista:

- **Nº8 Válvula relé** *(círculo verde)*: crea la TFA a partir de la TDP. En caso de fuga, pasar al otro panel o a freno de auxilio.
- **Nº6 Llave de aislamiento del panel de TFA** *(conjunto marcado en magenta)*: cierra para evitar una fuga completa de TFA por este panel.

![Panel de generación de TFA con los 20 elementos numerados (imagen 20 del manual)](vehiculos/serie-449/panel-generacion-tfa.webp)

## 2. Panel de control del pantógrafo — A4/A5, lado izquierdo (último panel del coche)

Un panel por pantógrafo (A4 y A5). Contiene las electroválvulas (07/1) con las que el COSMOS sube el pantógrafo correspondiente.

- **Nº8/1 Llave de aislamiento de pantógrafo**: única llave accionable; anula neumáticamente el pantógrafo (ver Equipo eléctrico).

## 3. Panel de freno TFA — A4/A5, lado derecho (inicio del coche)

El panel más importante para el frenado neumático. Aquí se materializa la demanda del manipulador: las TCU dan freno eléctrico, la BCU crea la TFA constantemente y aplica presión a los cilindros de freno vía TDP según lo que falte por cubrir. La TFA en sí no se usa para frenar en modo normal — sirve de bucle de control entre presión pedida y presión real en los cilindros (excepto en canal de freno indirecto: fallo de BCU o remolque).

Hay uno de estos paneles en A4 y otro en A5, cada uno con su propio juego de llaves — **el panel al que hay que ir depende de qué eje/bogie esté averiado**, no vale cualquiera de los dos.

Llaves accionables (en cada panel):
- **Nº5** Aislamiento freno de estacionamiento, **bogies compartidos** — con llave + trinquetes (aislamiento real por avería). Para apretar/aflojar sin avería, ver el cuadradillo del EP-Compact más abajo.
- **Nº6** Aislamiento arenero bogie extremo (el arenero de bogies compartidos usa la llave del panel de areneros del A3).
- **Nº7/1** Aislamiento suspensión bogie compartido A4/A3 (fuga de balonas) — sin límite de velocidad, pero pérdida de confort.
- **Nº7/2** Aislamiento suspensión bogie compartido A1-A4 // A2-A5 — igual, sin límite de velocidad, pérdida de confort.
- **Nº10/1** Aislamiento cilindros de freno **ejes remolques** (vacía esos cilindros de la mitad del tren correspondiente).
- **Nº10/2** Aislamiento cilindros de freno **ejes motores** (ídem).

Qué panel según el eje/bogie afectado (no se anula por eje suelto, siempre en grupo):

| Ejes / bogie afectado | Panel | Llave |
|---|---|---|
| Servicio, ejes remolques 1, 2, 6 | Panel TFA del **A4** | 10/1 |
| Servicio, ejes motores 3, 4, 5 | Panel TFA del **A4** | 10/2 |
| Servicio, ejes remolques 7, 11, 12 | Panel TFA del **A5** | 10/1 |
| Servicio, ejes motores 8, 9, 10 | Panel TFA del **A5** | 10/2 |
| Estacionamiento, bogies compartidos 2 y 3 (ejes 3,4,5,6) | Panel TFA del **A4** | 5 |
| Estacionamiento, bogies compartidos 4 y 5 (ejes 7,8,9,10) | Panel TFA del **A5** | 5 |

## 4. Panel auxiliar de freno — A1/A2, lado izquierdo (final del coche)

No confundir con el "panel de auxiliares" (nº6). Cubre lo que el panel de freno TFA no cubre para los **bogies extremos**:

- **Nº5** Aislamiento freno de estacionamiento (bogie extremo).
- **Nº7** Aislamiento de suspensión (bogie extremo).
- **Nº10 (tetones junto a cada electroválvula)** Apretar/aflojar eléctricamente el freno de estacionamiento del bogie extremo, sin aislar: introduce o libera aire en los cilindros (si hay aire en TDP). Es el equivalente, para bogie extremo, al cuadradillo del EP-Compact en bogies compartidos (ver panel 5) — no sustituye al aislamiento con llave Nº5 + trinquetes cuando hay avería real.

![Panel auxiliar de freno: tetón rojo "Aprieta" y tetón azul "Afloja" del freno de estacionamiento](vehiculos/serie-449/panel-auxiliar-freno-tetones.webp)

## 5. Paneles de freno EP-Compact — A4/A5, lado izquierdo

Dos EP-Compact por coche, prácticamente idénticos: uno para ejes motores, otro para ejes remolques. Actúan como "ordenador central" de freno de esa mitad (parte de la BCU), con:

- **Módulo CP-C**: aplicación del freno de ejes motores de la mitad del tren.
- **Módulo CP-P**: freno de estacionamiento de **bogies intermedios**.
- **Módulo CP-M**: areneros del bogie extremo.
- **DCL**: convertidor electroneumático — presión de referencia → presión a cilindros de freno (canal de freno directo, el normal). En canal indirecto (fallo BCU o remolque) se usa la TFA con distribuidor.
- **EDU**: válvula de carga variable según balonas.
- Electroválvulas de urgencia (canal independiente, inversas: al desexcitarse dan presión máxima a los C.F.).

El EP-Compact de **ejes motores** tiene además un **cuadradillo** para **apretar/aflojar eléctricamente** el freno de estacionamiento de bogies compartidos — *ojo, esto no es lo mismo que aislarlo*: es una orden eléctrica a los cilindros (como pulsar el botón de cabina pero desde el panel), útil para soltar frenos rápido sin tener que ir con llave + trinquetes bogie a bogie (por ejemplo antes de un remolque). No sustituye al aislamiento real cuando hay una avería (agarrotamiento), que sigue necesitando llave + trinquetes.

![EP-Compact de ejes motores, con el cuadradillo del freno de estacionamiento de bogies compartidos señalado](vehiculos/serie-449/ep-compact-freno-estacionamiento.webp)

**Resumen — aislamiento real de frenos por avería (llave + trinquetes, con reducción de prestaciones):**
- Servicio: de 3 en 3 ejes, diferenciando motor/remolque, llaves 10/1 y 10/2 del panel de freno TFA que corresponda (A4 o A5 según el eje).
- Estacionamiento bogie extremo: llave Nº5 del **panel auxiliar de freno** (A1 o A2).
- Estacionamiento bogie compartido: llave Nº5 del **panel de freno TFA** (A4 o A5) — no del EP-Compact.

**Apretar/aflojar sin aislar (orden eléctrica, sin avería):**
- Bogies compartidos: cuadradillo del EP-Compact (A4/A5).
- Bogies extremos: tetones junto a cada electroválvula del panel auxiliar de freno (A1/A2).

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
