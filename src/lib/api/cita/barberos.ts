import { type DataBarbero } from "@/types/barberos.type";
import api from "../axios";
import qs from "qs";

export const getBarberos = async () => {
  const query = qs.stringify(
    {
      fields: ["id", "estado", "documentId"],
      filters: {
        usuario: {
          $and: [{ rol: { nombre: { $eq: "BARBERO" } } }],
        },
      },
      populate: {
        usuario: {
          populate: {
            rol: {
              fields: ["id", "nombre"],
            },
          },
          fields: ["id", "nombres"],
        },
      },
    },
    { encodeValuesOnly: true },
  );

  try {
    const response = await api.get(`/barberos?${query}`);
    const { data } = response.data;

    const barberos = data.map(
      ({ id, documentId, estado, usuario }: DataBarbero) => {
        return {
          id,
          documentId,
          estado,
          usuario: {
            id: usuario.id,
            documentId: usuario.documentId,
            nombres: usuario.nombres,
            rol: usuario.rol.nombre,
          },
        };
      },
    );

    return barberos;
  } catch {
    return { data: [], meta: {}, message: "Error al obtener Barberos" };
  }
};
