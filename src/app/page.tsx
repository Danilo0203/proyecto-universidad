import { Galeria } from "@/components/webSite/Galeria";
import { Hero } from "@/components/webSite/Hero";
import { NavbarHome } from "@/components/webSite/NavbarHome";
import { Productos } from "@/components/webSite/Productos";
import { Servicios } from "@/components/webSite/Servicios";
import { Ubicacion } from "@/components/webSite/Ubicacion";

export default function HomePage() {
  return (
    <main className="bg-[#1B1C1E]">
      <NavbarHome />
      <Hero />
      <Servicios />
      <Productos />
      <Galeria />
      <Ubicacion />
    </main>
  );
}
