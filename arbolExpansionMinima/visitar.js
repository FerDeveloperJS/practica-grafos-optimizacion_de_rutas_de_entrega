function visitar(sede, grafo, enArbolExpansionMinima, candidatos) {
  enArbolExpansionMinima.add(sede);

  for (let vecino of grafo.adjuntos[sede]) {
    if (!enArbolExpansionMinima.has(vecino.nodo)) {
      candidatos.push({
        sede1: sede,
        sede2: vecino.nodo,
        peso: vecino.peso,
      });
    }
  }
}

export default visitar;
