import visitar from "./Visitar.js";

function prim(grafo, inicio) {
  let arbolExpansionMinima = [];

  let costoTotal = 0;

  let enArbolExpansionMinima = new Set();

  let candidatos = [];

  visitar(inicio, grafo, enArbolExpansionMinima, candidatos);

  while (
    candidatos.length > 0 &&
    enArbolExpansionMinima.size < grafo.sedes.length
  ) {
    candidatos.sort((a, b) => a.peso - b.peso);
    let mejorArista = candidatos.shift();
    let { sede1, sede2, peso } = mejorArista;

    if (enArbolExpansionMinima.has(sede2)) {
      continue;
    }

    arbolExpansionMinima.push(mejorArista);
    costoTotal += peso;

    visitar(sede2, grafo, enArbolExpansionMinima, candidatos);
  }

  return { arbolExpansionMinima, costoTotal };
}

export default prim;
