function construirArbolDesdeArbolExpansionMinima(aristas) {
  let arbol = {};

  for (let { sede1, sede2, peso } of aristas) {
    if (!arbol[sede1]) arbol[sede1] = [];
    if (!arbol[sede2]) arbol[sede2] = [];

    arbol[sede1].push({ nodo: sede2, peso });
    arbol[sede2].push({ nodo: sede1, peso });
  }

  return arbol;
}

export default construirArbolDesdeArbolExpansionMinima;
