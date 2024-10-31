import { ServicioData } from "@/types/servicios.type";
import api from "../axios";
import qs from "qs";
import { DataCalendario } from "@/types/calendario";

export const getCalendario = async (
  barberoId: string,
): Promise<{
  data: ServicioData[];
  meta: any;
  message?: string;
}> => {
  const query = qs.stringify(
    {
      fields: ["id", "estado"],
      filters: {
        barbero: { documentId: barberoId },
      },
      populate: {
        barbero: {
          fields: ["id", "documentId"],
          populate: {
            dias_trabajos: {
              fields: ["fecha_inicio", "fecha_final"], // solo los campos específicos
            },
            horas_trabajos: {
              fields: ["hora_inicio"], // campo específico para horas_trabajos
            },
          },
        },
      },
    },
    { encodeValuesOnly: true },
  );

  try {
    const response = await api.get(`/citas?${query}`);
    const { data, meta } = response.data;

    const calendario = data.map((cita: DataCalendario) => {
      return {
        id: cita.id,
        documentId: cita.documentId,
        estado: cita.estado,
        horarios: {
          id: cita.barbero.id,
          documentId: cita.barbero.documentId,
          dias_trabajos: cita.barbero.dias_trabajos,
          horas_trabajos: cita.barbero.horas_trabajos,
        },
      };
    });

    return { data: calendario, meta };
  } catch {
    return { data: [], meta: {}, message: "Error al obtener calendario" };
  }
};
