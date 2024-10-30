import { BarberosCitas } from "@/components/webSite/agendar-cita/BarberosCitas";
import { ServiciosCitas } from "@/components/webSite/agendar-cita/ServiciosCitas";

export default function CitasPage() {
  return (
    <div>
      <ServiciosCitas />
      <BarberosCitas />
    </div>
  );
}
