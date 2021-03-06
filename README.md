# Reactive Team
Proyecto React NUMEN

![reactive-team](https://github.com/alesitom/reactive-team/blob/master/reactive-team.png)

## Tabla de contenido

- [Reactive Team](#reactive-team)
  - [Tabla de contenido](#tabla-de-contenido)
    - [Dudas para revisar con Guille (Tutor)](#dudas-para-revisar-con-guille-tutor)
    - [Definiciones que tomamos como equipo (son modificables)](#definiciones-que-tomamos-como-equipo-son-modificables)
    - [Estilos Generales](#estilos-generales)
    - [Ramas-Branches](#ramas-branches)
    - [Generalidades](#generalidades)
    - [Componentes](#componentes)
      - [Componente 1:](#componente-1)
      - [Componente 2:](#componente-2)
      - [Componente 3:](#componente-3)
      - [Componente 4:](#componente-4)
      - [Componente 5:](#componente-5)
    - [Etapas:](#etapas)
    - [Mejoras post primer merge:](#mejoras-post-primer-merge)

-----------------------------------------------------

### Dudas para revisar con Guille (Tutor)
1. ¿Como manejamos el css que cada uno irá generando? Luego mergeamos en un único archivo css global? O podríamos tener lo que se cruce en uno solo, ej, color, breakpoints, mediaqueries, etc. en uno general y lo particular en css sueltos? (para no tener que retrabajar cada uno lo que sea cross /core)
2. Instagram, podemos usar api de la app? o mockup local?

-----------------------------------------------------

### Definiciones que tomamos como equipo (son modificables)
1. CSS puro:
    - Armar mediaqueries/breakpoints
    - Armar roots: color, font, font-size
	- Breakpoints:
	  - MS: 320px
	  - MM: 375px
	  - ML: 425px
	  - T: 768px
	  - DS: 1024px
	  - DM: 1366px
	  - DL: 1440px 
2. Deseable utilizar SASS
3. Desarrollamos misma temática propuesta por profesor/numen
4. En la carpeta **resources** estan las fuentes, la imagen de cada componente a desarrollar junto con sus los logos, ilustraciones, imágenes, etc.

-----------------------------------------------------

### Estilos Generales
- Colores
  - Primary: #FF8126
  - Background: #FFFFFF
  - Success: #C2E8CE
  - Danger: #E5C0C0
  - Warning: #E2E2BE
  - Info: #C0C8E5

-----------------------------------------------------

### Ramas-Branches
- PRINCIPALES:
  - master (versión para entregar)
  - dev    (versión en desarrollo)

- SECUNDARIAS: En estas ramas iremos desarrollando los componentes que cada uno vaya eligiendo.
  - hugo
  - ale
  - augusto
  - braian

-----------------------------------------------------

### Generalidades
- Call con equipo: Cíclica todos los sábados a las 19 horas a través de canal [Discord](https://discord.gg/aUe5fqZj)
- Archivo en FIGMA: [Ver Diseño](https://www.figma.com/file/ptZy1a106K1UbSFh1O4v93/Food-store-template-(Community)?node-id=0%3A1)
- Consignas del Proyecto: [Ver DPF](https://github.com/alesitom/reactive-team/blob/2e1a5be933721cd099adb33e0f460acd5d589526/docs/Proyecto%20React.pdf)
- Discribución de Archivos:
![Ver Imagen](https://github.com/alesitom/reactive-team/blob/7c7809e3f75295364d75464195b3ea4cb3265101/docs/Estructura%20de%20archivos.png)

-----------------------------------------------------

### Componentes
<p>Para no complicarnos y por recomendación de Guille, lo mejor será encargarse cada uno de una parte de la página y desarrollar ese componente conformado con los subcomponentes que a cada uno le parezca oportuno.</p>
<p>Si algún subcomponente se repite en algún otro componente, lo mejor será, para esta primera instancia, hacerlo nuevamente para cada componente, son pocos los casos.</p>
<p>En la siguiente lista están los componentes a desarrollar, cada uno es libre de tomar el que quiera, mientras este sin ser tomado por alguien más.</p>
<p>Para indicar que te encargarás de un componente, solo debes reemplazar el texto "<strong>Aún nadie</strong>" por tu nombre.</p>
<p>Los estados serán <strong>Por hacer</strong>, <strong>En proceso</strong> y <strong>Terminado</strong></p>

- [Componente 1](#Componente-1): 
  - Tomado por: **Braian**
  - Estado: **En proceso**

- [Componente 2](#Componente-2):
  - Tomado por: **Ale**
  - Estado: **En proceso - Falta ajustar vista mobile y crear logica JS para agregar al carrito,**

- [Componente 3](#Componente-3):
  - Tomado por: **Ale**
  - Estado: **En proceso - Falta ajustar vista mobile.**

- [Componente 4](#Componente-4):
  - Tomado por: **Ale**
  - Estado: **Por hacer**

- [Componente 5](#Componente-5):
  - Tomado por: **Augusto**
  - Estado: **En proceso**

#### Componente 1:
![Componente 1](https://github.com/alesitom/reactive-team/blob/fd37f6cc4e0f42e86702be4afbe99bfb66a2cf76/resources/Componente%201/Componente%201.png)
#### Componente 2:
![Componente 2](https://github.com/alesitom/reactive-team/blob/fd37f6cc4e0f42e86702be4afbe99bfb66a2cf76/resources/Componente%202/Componente%202.png)
#### Componente 3:
![Componente 3](https://github.com/alesitom/reactive-team/blob/1d67c1febfb9314615f50dcab1a6881eb9634161/resources/Componente%203/Componente%203.png)
#### Componente 4:
![Componente 4](https://github.com/alesitom/reactive-team/blob/1d67c1febfb9314615f50dcab1a6881eb9634161/resources/Componente%204/Componente%204.png)
#### Componente 5:
![Componente 5](https://github.com/alesitom/reactive-team/blob/1d67c1febfb9314615f50dcab1a6881eb9634161/resources/Componente%205/Componente%205.png)

-----------------------------------------------------

### Etapas:
- [X] Inicialización del Proyecto React
- [X] Definición y Elección de Componentes
- [X] Creación de Ramas
- [X] Unión de Ramas
- [ ] Pruebas de funcionamiento integral y arreglos
- [ ] Puesta en Producción
- [ ] Mejoras e implementaciones extras

-----------------------------------------------------
### Mejoras post primer merge:
Requisitos:
1. Al tocar btn Quick Shop y Buy Now que se conecte en backend y sume al globo de notificacion --> Braian
2. Carousel instagram --> ale
3. agregar css al footer / tener cuidado que est[a pisando el UL/LI del navbar --> augusto

NTH:
1. Limitar ancho maximo de cover --> braian (HECHO)
2. sombra paralela al texto del cover para que se vea en mobile --> braian (HECHO)
3. btn browse-brands agregar hover --> braian (HECHO)
4. tell a friend a 1280px; --> ale
5. Button carrito que no te persiga y ajustar visualmente el numero con el circulo --> braian (HECHO)
7. tell a friend, ajustes menores + detalle hover --> ale
6. menu hamburguesa tiene espacio adicional cuando cerras el alert superior --> braian
