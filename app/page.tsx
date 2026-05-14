import Hero from "@/components/home/Hero";
import ServiciosDestacados from "@/components/home/ServiciosDestacados";
import Estadisticas from "@/components/home/Estadisticas";
import Testimonios from "@/components/home/Testimonios";
import MapaUbicacion from "@/components/home/MapaUbicacion";
import CTACitas from "@/components/home/CTACitas";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosDestacados />
      <Estadisticas />
      <Testimonios />
      <MapaUbicacion />
      <CTACitas />
    </>
  );
}
