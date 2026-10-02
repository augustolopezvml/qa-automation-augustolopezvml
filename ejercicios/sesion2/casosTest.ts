interface CasoDeTest {
  id: number;
  titulo: string;
  prioridad: string;
  ejecutado: boolean;
}

const casos: CasoDeTest[] = [
  {
    id: 1,
    titulo: "Login válido",
    prioridad: "alta",
    ejecutado: true,
  },
  {
    id: 2,
    titulo: "Login inválido",
    prioridad: "alta",
    ejecutado: false,
  },
  {
    id: 3,
    titulo: "Recuperación de contraseña",
    prioridad: "media",
    ejecutado: true,
  },
];

const formatearCaso = (caso: CasoDeTest): string => {
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${
    caso.ejecutado ? "Ejecutado" : "Pendiente"
  }`;
};

function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(casos);
    }, 500);
  });
}

async function main() {
  const casosObtenidos = await obtenerCasosDeTest();

  casosObtenidos.forEach((caso) => {
    console.log(formatearCaso(caso));
  });
}

main();