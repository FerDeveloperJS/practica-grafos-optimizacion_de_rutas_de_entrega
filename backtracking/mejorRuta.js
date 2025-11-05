import backtracking from "./backtracking.js";

function mejorRuta(arbol, inicio) {
  let mejor = {
    camino: null,
    costo: null,
  };

  let visitados = new Set([inicio]);
  let caminoInicial = [inicio];

  backtracking(arbol, inicio, visitados, caminoInicial, 0, mejor);

  return mejor;
}

export default mejorRuta;
