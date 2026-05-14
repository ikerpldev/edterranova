export interface Doctor {
  nombre: string;
  especialidad: string;
  cedula: string;
  descripcion: string;
  imagen: string;
}

export const equipo: Doctor[] = [
  {
    nombre: "Dr. Carlos Mendoza Aguirre",
    especialidad: "Director Clínico · Implantología Oral",
    cedula: "Ced. Prof. 7283491 · Ced. Esp. 9382716",
    descripcion:
      "Cirujano dentista por la Universidad de Guadalajara con especialidad en Implantología Oral por la Universidad Nacional Autónoma de México. Más de 15 años colocando implantes dentales premium en Guadalajara. Miembro activo de la Asociación Dental Mexicana.",
    imagen:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    nombre: "Dra. Laura Vega Hernández",
    especialidad: "Ortodoncia y Ortopedia Maxilar",
    cedula: "Ced. Prof. 8472913 · Ced. Esp. 10283746",
    descripcion:
      "Ortodoncista certificada con más de 12 años de experiencia. Especialista en alineadores Invisalign nivel Platinum Provider y en ortopedia funcional infantil. Egresada del Centro Universitario de Ciencias de la Salud (UdeG).",
    imagen:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
  {
    nombre: "Dr. Roberto Silva Castañeda",
    especialidad: "Endodoncia Microscópica",
    cedula: "Ced. Prof. 6193847 · Ced. Esp. 8276391",
    descripcion:
      "Endodoncista con posgrado en la Universidad Tecnológica de México. Pionero en el uso de microscopía dental en la región. Realiza tratamientos de conductos en una sola cita con tasa de éxito superior al 95%.",
    imagen:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
  {
    nombre: "Dra. Ana Torres Maldonado",
    especialidad: "Estética Dental y Odontopediatría",
    cedula: "Ced. Prof. 7918264 · Ced. Esp. 9472831",
    descripcion:
      "Doble especialidad: Estética Dental y Odontopediatría. Diseña sonrisas digitales con tecnología DSD y atiende a los pacientes más pequeños de la clínica con un trato cálido y profesional que las familias agradecen.",
    imagen:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
];
