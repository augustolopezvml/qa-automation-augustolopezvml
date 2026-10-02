const casos = [
  {
    id: 1,
    titulo: "Login válido",
    prioridad: "alta",
    ejecutado: false,
  },
  {
    id: 2,
    titulo: "Login inválido",
    prioridad: "alta",
    ejecutado: true,
  },
  {
    id: 3,
    titulo: "Recuperación de contraseña",
    prioridad: "media",
    ejecutado: false,
  },
  {
    id: 4,
    titulo: "Búsqueda de productos",
    prioridad: "baja",
    ejecutado: true,
  },
  {
    id: 5,
    titulo: "Checkout exitoso",
    prioridad: "alta",
    ejecutado: false,
  },
];

function contarPorPrioridad(casos: any[]) {
  const resultado = {
    alta: 0,
    media: 0,
    baja: 0,
  };

  casos.forEach((caso) => {
    resultado[caso.prioridad as keyof typeof resultado]++;
  });

  return resultado;
}

function listarPendientes(casos: any[]) {
  return casos.filter((caso) => !caso.ejecutado);
}

const formatearCaso = (caso: any): string => {
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${
    caso.ejecutado ? "Ejecutado" : "Pendiente"
  }`;
};

casos.forEach((caso) => {
  console.log(formatearCaso(caso));
});

console.log("Cantidad por prioridad:");
console.log(contarPorPrioridad(casos));

console.log("Casos pendientes:");
console.log(listarPendientes(casos));