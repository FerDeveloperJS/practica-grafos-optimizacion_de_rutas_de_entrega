# Práctica Grafos: Optimización de Rutas de Entrega

## Descripción del Escenario:

Una empresa de comidas tiene varias sedes (nodos) alrededor de la ciudad y rutas que las conectan (aristas).

Todos los días antes de abrir las sedes, debe llevar a cada una de ellas la materia prima para que puedan operar con normalidad.

El objetivo es encontrar la ruta más eficiente para entregar los paquetes minimizando el costo total de transporte (considera como mínimo aspectos como el valor del galón de Diesel y la distancia) y asegurando que se visiten todos los puntos de entrega.

## Objetivos del Ejercicio:

- Modelar el problema utilizando grafos. Se deben tener al menos 5 sedes y caminos entre ellas.

- Aplicar el algoritmo de árbol de expansión mínimo para determinar la ruta más económica.

- Utilizar técnicas de backtracking para explorar diferentes combinaciones de rutas y optimizar la entrega.

### Modelado del Problema

El problema se debe modelar como un grafo ponderado ¿Por qué?.

En la descripción del escenario nos hablan de que para encontrar la ruta más eficiente se deben tener en cuenta aspectos como: el valor del galón del Diesel y la distancia, haciendo enfasís en minimizar el costo total, es decir estos 2 aspectos.

Entonces el grafo ponderado nos sirve porque un grafo ponderado (o grafo con pesos) es un tipo de grafo en el que cada arista (o conexión entre dos nodos) tiene un valor numérico asociado, llamado peso o costo.

Los pesos representan la magnitud o dificultad de moverse a lo largo de esa conexión. El significado del peso depende completamente del contexto de la aplicación: que en este caso son el valor del galón del Diesel y la distancia.

### Conceptos Claves del Modelado

1. Nodos

Los nodos representan las ubicaciones físicas que deben ser visitadas.

- Definición: Cada nodo es una sede (punto de entrega) de la empresa de comidas.
- Requerimiento: Se deben definir al menos 5 sedes

2. Aristas

Las aristas representan las posibles conexiones (caminos) entre las sedes.

3. Pesos o Ponderaciones

Los pesos son el elemento crucial a minimizar.

- Definición de costo: Se debe construir una función que incorpore los factores solicitados (distancia y valor del Galón de Diesel).

- Objetivo: La ruta más eficiente será aquella cuya suma total de los pesos de las aristas recorridas sea la mínima.

#### Implementación del modelado

1. Nodos

Modelaremos el problema con 6 nodos en total para satisfacer la condición de tener al menos 5 puntos de entrega (sedes) más el punto de partida/llegada (la base).

Usaremos las siguientes notaciones:

- Sede Cero: Será el punto de inicio y fin del recorrido, es decir el Almacen central donde se carga la materia prima.

- Puntos de entrega (Sede Uno, Sede Dos, Sede Tres, Sede Cuatro, Sede Cinco): Serán las 5 sedes que deben ser visitadas para dejar la materia prima.

2. Tipo De Grafo

Para el modelado de este problema asumiremos que ir de A a B cuesta lo mismo que ir de B a A, es decir un grafo no dirigido

3. Unidades

- Distancias: Kilometros(km)
- Precio del combustible: Por galón (moneda/galón)
- Rendimiento del Vehículo: km/galón

4. Definición de peso(costo por arista)

Se usara la siguiente formula como modelo:

cost(u, v) = d(u, v) \* (Pgal / r)

Donde:

- d(u, v) = Distancia entro los nodos(km)
- Pgal = Precio del galón de combustible
- r = Rendimiento del vehículo
- Pgal / r = Costo de recorrer 1km

## Supuestos asumidos

- Se cuenta con un solo vehículo que realiza todas las entregas.

- El recorrido comienza y termina en la base central.

- Cada sede se visita exactamente una vez.

- Las distancias son fijas y el grafo es no dirigido.

- El costo de transporte depende únicamente del consumo de combustible.

- El precio del galón y el rendimiento del vehículo son constantes.

- No existen restricciones de capacidad, tiempo ni condiciones de tráfico.

## Como ejecutar el proyecto

Ir al archivo main.js y en la terminal escribir el siguiente comando: node main.js
