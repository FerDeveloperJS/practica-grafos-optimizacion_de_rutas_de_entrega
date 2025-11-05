// GRAFO NO DIRIGIDO

class Grafo {
  constructor() {
    this.sedes = [];
    this.adjuntos = {};
  }

  agregarSede(sede) {
    if (!this.sedes.includes(sede)) {
      this.sedes.push(sede);
      this.adjuntos[sede] = [];
    }
  }

  agregarRuta(sede1, sede2, peso) {
    this.adjuntos[sede1].push({ nodo: sede2, peso: peso });
    this.adjuntos[sede2].push({ nodo: sede1, peso: peso });
  }

  mostrarGrafo() {
    for (let s of this.sedes) {
      console.log(s, "→", this.adjuntos[s]);
    }
  }
}

export default Grafo;
