// ARBOL EXPANSION MINIMA

import Grafo from "./Grafo.js";
import calcularPeso from "./arbolExpansionMinima/calcularPeso.js";
import prim from "./arbolExpansionMinima/prim.js";

let miGrafo = new Grafo();

// Agregar sedes
["S0", "S1", "S2", "S3", "S4", "S5"].forEach((sede) =>
  miGrafo.agregarSede(sede)
);

// Agregar rutas con sus pesos
miGrafo.agregarRuta("S0", "S1", calcularPeso(10)); // 50.000
miGrafo.agregarRuta("S0", "S2", calcularPeso(20)); // 100.000
miGrafo.agregarRuta("S1", "S2", calcularPeso(15)); // 75.000
miGrafo.agregarRuta("S1", "S3", calcularPeso(8)); // 40.000
miGrafo.agregarRuta("S2", "S4", calcularPeso(12)); // 60.000
miGrafo.agregarRuta("S3", "S4", calcularPeso(18)); // 90.000
miGrafo.agregarRuta("S4", "S5", calcularPeso(7)); // 35.000
miGrafo.agregarRuta("S3", "S5", calcularPeso(5)); // 25.000

let arbolExpansionMinima = prim(miGrafo, "S0");
console.log(arbolExpansionMinima);

// BACKTRACKING

import mejorRuta from "./backtracking/mejorRuta.js";
import construirArbolDesdeArbolExpansionMinima from "./backtracking/construirArbolDesdeArbolExpansionMinima.js";

let arbolConstruido = construirArbolDesdeArbolExpansionMinima(
  arbolExpansionMinima.arbolExpansionMinima
);

let ruta = mejorRuta(arbolConstruido, "S0");

console.log(ruta);
