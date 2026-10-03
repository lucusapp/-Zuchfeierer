---
title: "Modo Socorro"
summary: "Modo degradado ante colapso informático: cuándo se activa, cómo se activa (pupitre vs armario de térmicos), qué debe hacer el maquinista y peculiaridades del freno."
order: 0.5
tags: ["socorro", "modo degradado", "avería", "consulta rápida"]
meta:
  velocidad_max: "80 km/h"
  freno_activo: "Auxilio (TFA, control neumático directo)"
  presion_tfa_objetivo: "5 bar"
---

> ⚠️ **Origen de este apartado:** a diferencia del resto de la app (basado en los apuntes internos de formación de la 449), este contenido se ha completado con documentación complementaria para cubrir un vacío del manual original. Antes de aplicarlo en circulación real, **contrasta los datos concretos — sobre todo la referencia "16-S10" del conmutador — con el Manual de Conducción vigente o con tu mando intermedio.** Es exactamente el tipo de contenido que el propio manual pide verificar en caso de duda.

## Qué es y para qué sirve

Modo de conducción excepcional, de degradación extrema. Su objetivo es permitir retirar el tren de vía principal o de una zona de riesgo por sus propios medios cuando el sistema informático de control (**COSMOS**) ha fallado de forma masiva. En este modo, la prioridad pasa a ser poder mover el tren con tracción mínima, por encima de las condiciones lógicas y automáticas de parada.

## Cuándo se activa

- **Colapso de la red TCN**: caída masiva del bus de datos y de la comunicación interna entre coches.
- **Mal funcionamiento del manipulador**: avería o fallo de lectura del mando físico de tracción/freno en cabina.
- **Puesta en servicio con batería baja**: tensión por debajo de los valores nominales de las baterías de 72 Vcc.
- **Rotura de tuberías principales**: pérdida de continuidad física en la TFA (Tubería de Freno de Auxilio) o la TDP (Tubería de Depósitos Principales).

## Cómo se activa: pupitre vs armario de térmicos — no es lo mismo

Hay dos formas de entrar en Modo Socorro, y son de naturaleza distinta:

### Mando del pupitre (selector de socorro)
Es una orden **por software**: el COSMOS sigue vivo, recibe la orden y es él quien activa por software las restricciones del modo (límite a 80 km/h, cambio a freno de auxilio, etc.). Se usa cuando el ordenador de a bordo todavía responde pero hace falta pasar a modo degradado (por ejemplo, avería del manipulador o batería baja).

### Conmutador del armario de bajas tensiones (ABT), identificado como **16-S10**
Es un **puenteo físico/eléctrico** (bypass de hardware), no una orden al software. Se usa cuando la informática del tren está completamente colapsada — pantalla congelada, comunicaciones TCN muertas — y el COSMOS ya no puede ni recibir la orden del pupitre. Al girar este conmutador se envía corriente directa por cableado analógico a las electroválvulas de freno y contactores de tracción esenciales, sin pasar por el ordenador.

En resumen: **el pupitre es "pedírselo al ordenador"; el armario BT es "saltarte el ordenador".**

## Qué debe hacer el maquinista, paso a paso

1. **Diagnóstico rápido**: mirar los manómetros analógicos (TFA y TDP) y el indicador de tracción. Si las presiones son correctas pero el tren no tracciona, o la pantalla COSMOS da un código incoherente o se queda congelada/en negro, es un bloqueo lógico (falsa alarma o caída de red) — ver más abajo cómo resolverlo antes de ir a socorro si aún es posible.
2. **Activar el modo**: desde el pupitre si el sistema responde, o directamente en el conmutador **16-S10** del armario BT de la cabina activa si el sistema está colapsado.
3. **Piloto amarillo**: no se enciende manualmente — es consecuencia del conmutador. Al accionar el 16-S10 (o al activarse el modo desde el pupitre) se cierra el circuito en bypass y se ilumina de forma fija el piloto amarillo de Socorro en el pupitre, confirmando que los lazos de seguridad informática están anulados. Las pantallas conmutan a una "Pantalla de SOCORRO" simplificada, con aviso en rojo, y el diagnóstico ordinario de averías queda bloqueado.
4. **Freno de auxilio**: la conmutación es automática (la electroválvula de freno de servicio se queda sin alimentación y la lógica neumática pasa sola a freno de auxilio), **pero requiere una acción manual**: el tren tiende a aplicar freno de urgencia por defecto al perder la corriente de control, así que el maquinista debe llevar el manipulador de freno a la posición de afloje/carga para forzar neumáticamente el llenado de la TFA hasta **5 bar**.
5. **Circular** respetando el límite de **80 km/h**, bajo amparo de las órdenes del Puesto de Mando y en marcha degradada/a la vista (ver protecciones más abajo).

## Freno y tracción en Modo Socorro — lo que cambia de verdad

- **Desaparece por completo el freno de retención (eléctrico/reostático).** Es la peculiaridad más importante: ese freno necesita comunicación TCN y software para sincronizar los motores en modo generador, y en socorro no existe. Toda la retención pasa a depender del **freno neumático de fricción** (discos). Hay que anticipar mucho más las frenadas — riesgo real de sobrecalentamiento de los discos con demandas fuertes y sostenidas.
- **Freno de estacionamiento sin gestión automática.** Si se pierde el aire de la TDP, los muelles acumuladores se aplican solos ("se clavan"). Hay que vigilar los manómetros analógicos auxiliares de cabina y, si hace falta, usar el tirador de afloje manual de emergencia de los cilindros.
- **Sin antipatinaje/antideslizamiento (WSP degradado al mínimo).** El COSMOS ya no regula finamente la adherencia. Aplicar la tracción de forma muy progresiva, casi a impulsos, para no hacer patinar los ejes en carril húmedo o de baja adherencia.
- **ATP inoperativo.** ASFA Digital y ERTMS quedan sin comunicación de datos — hace falta aislarlos física/neumáticamente y circular bajo el amparo estricto de las órdenes del Puesto de Mando y marcha degradada visual.
- **Bypass automático de lazos lógicos**: tracción, urgencia y detección de armónicos quedan puenteados automáticamente al entrar en el modo.

## Bloqueo del tren por falsas alarmas del COSMOS (sin llegar a socorro)

Antes de recurrir a socorro, si el tren "quita tracción" o aplica freno de urgencia de forma imprevista por un fallo informático puntual (lectura errónea de un sensor, falso positivo de bogie, fallo fantasma del lazo de puertas...), se puede intentar resolver así:

1. **Diagnóstico visual**: manómetros de TFA/TDP correctos pero el tren no tracciona, y la pantalla da un código genérico/incoherente o se congela → confirma bloqueo lógico, no avería física real.
2. **Ir al armario de térmicos (armario BT)** de la cabina activa: magnetotérmicos (breakers) numerados y etiquetados por subsistema (tracción, freno, puertas, hombre muerto/vigilante...).
3. **Rearme ("reset")**: bajar y subir el térmico de control informático del coche afectado (o de la lógica central de monitorización), para reiniciar ese módulo colgado — el equivalente a reiniciar un ordenador de sobremesa.
4. **Aislamiento físico (bypass) si el reset no soluciona nada**: si el componente está dañado de verdad y sigue mandando señal de parada al lazo de seguridad, usar los conmutadores de bypass del mismo armario (por ejemplo, aislamiento del lazo de puertas o de tracción) para puentear ese lazo de forma permanente y que la corriente llegue directa a los motores operativos, ignorando el bloqueo informático de ese coche.

## Parámetros técnicos — resumen

| Parámetro | Valor |
|---|---|
| Velocidad máxima | 80 km/h |
| Freno activo | Auxilio — control neumático directo sobre la TFA |
| Presión objetivo TFA | 5 bar (llenado manual con el manipulador) |
| Freno de retención | No disponible (solo freno neumático de fricción) |
| ATP (ASFA/ERTMS) | Inoperativo — requiere aislamiento y marcha bajo órdenes del PM |
| Mando de activación | Pupitre (software, COSMOS vivo) o conmutador 16-S10 del armario BT (bypass físico) |
| Indicación | Piloto amarillo fijo en pupitre + pantalla de SOCORRO simplificada |
