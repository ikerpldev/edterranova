export interface Testimonio {
  nombre: string;
  servicio: string;
  texto: string;
  calificacion: 5;
  fecha: string;
}

export const testimonios: Testimonio[] = [
  {
    nombre: "María Fernanda Reyes",
    servicio: "Ortodoncia",
    texto:
      "Tres años usando Invisalign con la Dra. Vega y el resultado fue mejor de lo que esperaba. Cada visita me explicó el avance con fotos y siempre fueron puntuales. Mi sonrisa cambió por completo.",
    calificacion: 5,
    fecha: "Marzo 2024",
  },
  {
    nombre: "Jorge Alberto Cárdenas",
    servicio: "Implantología",
    texto:
      "Me coloqué dos implantes con el Dr. Mendoza. La cirugía no dolió nada y la recuperación fue muy rápida. Las coronas se ven idénticas a mis dientes naturales, nadie nota la diferencia.",
    calificacion: 5,
    fecha: "Enero 2024",
  },
  {
    nombre: "Patricia Sandoval Núñez",
    servicio: "Estética Dental",
    texto:
      "Llegué con miedo porque tenía los dientes desgastados y manchados. La Dra. Torres me hizo un diseño de sonrisa con carillas de porcelana y honestamente parezco otra persona. Mis amigas no dejan de preguntarme qué me hice.",
    calificacion: 5,
    fecha: "Febrero 2024",
  },
  {
    nombre: "Luis Eduardo Ramírez",
    servicio: "Endodoncia",
    texto:
      "Llegué un viernes en la tarde con un dolor terrible y el Dr. Silva me atendió de emergencia. Me hizo la endodoncia ese mismo día sin dolor y al final me explicó todo con muchísima paciencia. 100% recomendado.",
    calificacion: 5,
    fecha: "Abril 2024",
  },
  {
    nombre: "Adriana Gutiérrez López",
    servicio: "Odontopediatría",
    texto:
      "Mi hijo de 5 años le tenía pavor al dentista. La Dra. Torres tuvo una paciencia increíble con él, le explicó todo como un juego y ahora pide ir solito. Las instalaciones para niños están bellísimas.",
    calificacion: 5,
    fecha: "Diciembre 2023",
  },
  {
    nombre: "Ricardo Magaña Ortiz",
    servicio: "Periodoncia",
    texto:
      "Tenía sangrado de encías desde hace años y nadie me había explicado qué tenía. Aquí me diagnosticaron periodontitis y me hicieron un tratamiento completo. Tres meses después, mis encías por fin se ven sanas.",
    calificacion: 5,
    fecha: "Noviembre 2023",
  },
  {
    nombre: "Sofía Ibarra Mendoza",
    servicio: "Blanqueamiento",
    texto:
      "Me hice el blanqueamiento con luz LED antes de mi boda y quedé encantada. La diferencia de tonos se nota muchísimo y no me dio sensibilidad fuerte. El kit para mantenimiento en casa también funciona muy bien.",
    calificacion: 5,
    fecha: "Mayo 2024",
  },
  {
    nombre: "Fernando Plascencia Ruiz",
    servicio: "Cirugía Oral",
    texto:
      "Me extrajeron las 4 muelas del juicio en una sola sesión con sedación y no recuerdo absolutamente nada. La recuperación fue muy llevadera siguiendo las indicaciones. Atención de primer nivel.",
    calificacion: 5,
    fecha: "Octubre 2023",
  },
];
