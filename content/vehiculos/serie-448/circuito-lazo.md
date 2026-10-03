---
title: "Circuito de lazo"
summary: "Qué elementos mantienen cerrado el lazo, los presostatos y cómo localizar qué lo ha abierto."
order: 5
tags: ["lazo", "presostato", "ASFA", "averías"]
meta:
  presostato_minima: "cierra 8,5 bar · abre 6,5 bar"
  presostato_kbr: "cierra 6,5 bar · abre 5,7 bar"
---

> Fuente: Chuleta 448 (Dpto. de Formación de Tarragona).

## Elementos del lazo

- **Presostato de mínima** (único, en el Cm): cierra con **8,5 bar** y abre a **6,5 bar**.
- **Presostato KBR** (tres, uno en cada coche): cierra a **6,5 bar** y abre a **5,7 bar**.
- **Fusible de 2 A**: uno en cada cabina; está activo el de la cabina habilitada.
- **Magnetotérmico 1e2** en Cm y **1e3** en Rc: activo el de la cabina habilitada.
- **Magnetotérmico 1e6** en Cm: único en la serie alta (448012–448031).
- Aparatos de alarma de sala de viajeros.
- Dispositivo **HM** (hombre muerto).
- Enclavamiento final de carrera del Scharfenberg.
- **ASFA**: para el equipo ASFA hay que desconectar el conmutador de conexión y el de anulación de la cabina no habilitada. Recibe alimentación por dos enclavamientos de los relés de control (excitado el de la cabina habilitada y desexcitado el de las no habilitadas).
- Conmutador de control positivos/negativos en posición marcha en la cabina habilitada.
- Llave de socorro de puertas de acceso al tren (velocidad mayor de 3 km/h).
- Estribos desplegados.

## Cómo localizar qué ha abierto el lazo

1. **Maneta POS/NEG**: comprobar que está en la posición correcta. Abrir la llave del desacoplador y pulsarlo; solo funciona en marcha o negativos. Si no, invertir la posición (puede que la maneta se haya extraído mal o el conmutador haya quedado mal montado).
2. **Si libera al bajar de 3 km/h**: ha sido la llave de desbloqueo de una puerta (el iris indica la puerta abierta).
3. **Si no libera al bajar de 3 km/h**: acondicionar el primer enclavamiento de la derecha del RVD.

Si **libera**, comprobar: aparatos de alarma (indicados en el iris), presostato KBR de cada coche, dispositivo HM, enclavamiento del Scharfenberg, que el ASFA de la cabina contraria no esté conectado, que el ASFA de la habilitada esté bien conectado, que el interruptor de control de la cabina no habilitada no haya quedado conectado y el presostato de mínima.

Si **no libera**, comprobar: magnetotérmico 1e2 (freno) en Cm y 1e3 en Rc de la cabina habilitada; magnetotérmico 1e6 en Cm (si circulamos con el Cm en cabeza, serie alta); fusible de 2 A de la cabina habilitada; conector de la caja 4 Bis; y la maneta POS/NEG (invertir posición).
