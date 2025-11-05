function backtracking(arbol, actual, visitados, camino, costoAcumulado, mejor) {
  // Caso: ya visitamos todos los nodos
  if (visitados.size === Object.keys(arbol).length) {
    if (mejor.costo === null || costoAcumulado < mejor.costo) {
      mejor.costo = costoAcumulado;
      mejor.camino = [...camino]; // copia
    }
    return;
  }

  // Explorar vecinos
  for (let vecino of arbol[actual]) {
    if (!visitados.has(vecino.nodo)) {
      visitados.add(vecino.nodo);
      camino.push(vecino.nodo);

      backtracking(
        arbol,
        vecino.nodo,
        visitados,
        camino,
        costoAcumulado + vecino.peso,
        mejor
      );

      // BACKTRACK
      visitados.delete(vecino.nodo);
      camino.pop();
    }
  }
}

export default backtracking;
