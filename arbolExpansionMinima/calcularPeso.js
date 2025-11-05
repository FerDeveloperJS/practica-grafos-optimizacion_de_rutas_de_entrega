// VARIABLES GLOBALES

const Pgal = 50000;
const r = 10;
const costoPorKm = Pgal / r;

// FORMULA DEL MODELO

function calcularPeso(distancia) {
  return distancia * costoPorKm;
}

export default calcularPeso;
