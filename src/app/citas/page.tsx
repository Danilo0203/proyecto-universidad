import { BarberosCitas } from "@/components/webSite/agendar-cita/BarberosCitas";
import { CalendarioCitas } from "@/components/webSite/agendar-cita/CalendarioCitas";
import { ServiciosCitas } from "@/components/webSite/agendar-cita/ServiciosCitas";

export default function CitasPage() {
  return (
    <div>
      <ServiciosCitas />
      <BarberosCitas />
      <CalendarioCitas />
    </div>
  );
}
