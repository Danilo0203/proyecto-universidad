import { Header } from "@/components/pantalla/Header";
import { ListaBarberos } from "@/components/pantalla/lista-barberos/ListaBarberos";
import { ListaEspera } from "@/components/pantalla/lista-espera/ListaEspera";

export default function PatanllaPage() {
  return (
    <>
      <section className="container mx-auto flex min-h-dvh flex-1 flex-col px-4 py-10 sm:px-8 xl:px-4">
        <Header />
        <ListaEspera />
        <ListaBarberos />
      </section>
    </>
  );
}
