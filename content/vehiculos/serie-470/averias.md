---
title: "Averías"
summary: "Averías neumáticas (condenas, suspensión, antibloqueo) y eléctricas (batería, GMA, compresor, convertidor, disyuntor)."
order: 0
tags: ["averías", "condena", "GMA", "disyuntor"]
meta: {}
---

## Averías neumáticas

### Condena de un bogie
- Cerrar la llave **B12** de ese bogie.
- Desahogar la **KBR** por su cadenilla.
- Prestar atención al porcentaje de frenado.

### Condena de un coche (freno neumático)
- Cerrar las dos **B12**.
- Cerrar la **KBR**.
- Desahogar completamente el coche por la cadenilla de la KBR.
- Normalizar la KBR para dar continuidad al circuito de lazo.

### Anulación del segundo freno
- Cerrar la llave **P6** debajo del coche.
- Desahogar la válvula **FM3** por su cadenilla.
- Prestar atención al porcentaje de frenado.

### Condena completa del segundo freno
Dos formas:
- **Primera**: descargar todo el aire del 2º freno desde el mando de cabina, desahogar los tres FM3 (uno por coche) por sus cadenillas, y no volver a cargar el 2º freno.
- **Segunda**: cerrar la llave P6 debajo del coche, y desahogar los tres FM3 por sus cadenillas.

*Con el segundo freno condenado no se dispone de freno de auxilio. Las llaves de aislamiento del 2º freno van invertidas respecto a lo habitual: están abiertas cuando quedan perpendiculares a la tubería.*

### Condena de la suspensión
Anular la suspensión neumática del bogie afectado con su llave de mariposa. Si se aísla la balona del bogie más próximo a otro coche, puede haber diferencia de altura entre ambos — hay que regular la balona del otro coche para igualarlas. **Con una balona condenada, velocidad máxima 80 km/h.**

### Rotura de manguito de freno
Se nota por pérdida de aire en el manguito o tubería hacia el bogie. Cerrar la **B12** del bogie afectado (es común a los dos frenos: lo anula también el segundo freno de ese bogie).

### Agarrotamiento del freno de un bogie
**Causas**: presión del segundo freno incorrecta, o aire residual en el circuito de freno.
**Acciones**: aflojar el segundo freno hasta que marque 5 kg/cm². Si sigue agarrotado, accionar los micros antibloqueo del coche afectado (armario BT) y tirar de las cadenillas de KBR y FM3. Si aun así no libera, aplicar el procedimiento de condena de ese bogie.

### Pérdida de aire por los areneros
Al poner el inversor en "AD" baja la presión en la TDP; en "0" o "AT" la pérdida cesa — es que la electroválvula de los areneros se queda excitada. Desconectar el térmico **SDN1** (armario BT Cm, 5º por la izquierda) o **SDN2** (armario BT Rc, 2º por la izquierda), y cerrar el macho F1 correspondiente, bajo el bastidor.

## Averías eléctricas

### Batería con menos de 60 V (no arranca en sencillo)
**Causas**: batería que quedó conectada al parar, tren tierra conectado con el vehículo parado, batería en mal estado, o el convertidor no la carga.
**Acciones**: desconectar BatN de la unidad sin batería, acoplar eléctricamente con otra 448/470 útil, conectar en la unidad averiada alumbrado interior y control auxiliar, poner en marcha la unidad útil (reenganche del disyuntor extrarrápido, con TDP > 5 bar) y conectar su BatN. Cuando el GMA produzca, comprobar por el voltímetro que la batería carga; se puede desacoplar dejando esa unidad en marcha para completar la carga.

### Pantógrafo no sube
**Causas**: falta de presión en TDP o en el depósito de reserva, llave de aislamiento de pantógrafos cerrada, magnetotérmicos de pantógrafos abiertos, **CCN** desconectado, o puerta de la cámara de alta mal cerrada.
**Acciones**: comprobar presión en TDP; si el depósito de reserva tiene electroválvula y no está excitada, abrir la llave de reserva (si no está modificado, abrir la llave de paso de aire — en ambos casos hace falta más de 5 bar); comprobar las llaves de aislamiento neumático de pantógrafos (mismo armario que el depósito de reserva); comprobar el magnetotérmico **CCN** (armario BT Cm) y el de la cabina habilitada (**PanN1** o **PanN2**, en su armario BT); comprobar que la puerta de la cámara de alta cierra bien (enclavamiento de final de carrera).

### No cierra el disyuntor
**Causas**: regulador de tracción fuera de posición 0, baja tensión de batería con **BatN** o **CCN** desconectados, baja presión TDP, conmutadores **CCOS1**/**CCOS2** en OFF (armario BT Cm), o el enclavamiento de la puerta de la cámara de alta no hace contacto.
**Acciones**: regulador de tracción a 0; conectar BatN y CCN (si la batería está baja, acoplar con otra 440/470); si la TDP está baja, usar el compresor auxiliar (**ACPN + ACPS**); poner CCOS1 y CCOS2 en ON; desenclavar y volver a cerrar la puerta de la cámara de alta. Comprobar si cierra desde la cabina contraria, habilitándola.

### Se produce apertura al establecer tracción
**Causas**: actuación de una protección del panel de defectos (**MMOCD1, MMOCD2, DFD**) o posible derivación en un circuito de alta.
**Acciones**: seccionar, si hace falta, algún grupo de motores de tracción con su cuchilla en la cámara de alta (haciendo antes el procedimiento de puesta a tierra). Si es por **DFD** y **derivación en resistencias principales**, seccionar con la **cuchilla MS** en la cámara de alta, o desconectando **CCOS1** del armario BT.

### El GMA se para una vez en marcha
**Causas**: **MGSKN1** (armario BT Cm) o **MGSKN2** (armario BT Rc) desconectados, **MGCN** (armario BT Rc, parte superior izquierda) desconectado, o sobreembalamiento.
**Acciones**: rearmar los magnetotérmicos; en cabina Cm, accionar el pulsador de averías **MGRPB**; en cabina Rc, desconectar y conectar **MGCN**.

*Al pararse el GMA, la tracción sigue funcionando con normalidad, pero al entrar en servicio el autotransformador, la potencia del aire acondicionado queda reducida al 50%.*

### El GMA no se pone en marcha
El contactor **MGL** pone en marcha el GMA; si no recibe aire por la llave **G5**, no cierra. Causas: falta de presión por cierre del macho G5, rotura de tubería o del depósito de reserva del MGL, o falta de presión en el depósito de reserva. Si es el macho G5, abrirlo; si es falta de aire en el depósito, usar el compresor auxiliar para rellenarlo.

### El compresor no produce
**Causas**: térmicos **CPMKN1** (armario BT Cm) o **CPMKN2**/**CPMN** (armario BT Rc) saltados, o contactores **CPMK1**/**CPMK2** (armario BT Rc) abiertos — en algunos vehículos sustituidos por un arrancador electrónico con su propio magnetotérmico **CPMA**.
**Acciones**: rearmar CPMKN1, CPMKN2 y CPMN; rearmar CPMAN pulsándolo.

### No arranca o no produce el convertidor estático
**Causas**: avería interna o anomalía externa (sobrecarga o cortocircuito) — si se para, reintenta arrancar a los 7 segundos; a la quinta avería queda bloqueado.
**Acciones**: desconectar y volver a conectar el interruptor de palanca de puesta en marcha (esperar 10 segundos antes de reconectar). Si no arranca, la tracción puede seguir con normalidad, pero la climatización no funcionará al faltar la línea trifásica de 380 Vca.

### No conmuta a modo auxilio al no arrancar el GMA
**Causas**: falta de tensión del GMA, presencia de tensión del convertidor estático, o el aire acondicionado ya ha confirmado la reducción al 50%.
**Acciones**: desconectar el interruptor de puesta en marcha del convertidor estático, conectar el del GMA, esperar a que se estabilice su tensión y sea reconocida por el autotransformador, y entonces volver a conectar el convertidor estático.
