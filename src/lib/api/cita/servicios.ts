import api from "../axios";
import qs from "qs";

export const getServicios = async () => {
  const query = qs.stringify(
    {
      fields: ["nombre", "descripcion"],
      populate: {
        tipo_servicios: {
          fields: ["tipo", "precio", "tiempo"],
        },
      },
    },
    { encodeValuesOnly: true },
  );
  try {
    const response = await api.get(`/servicios?${query}`);

    return response.data;
  } catch {
    return { data: [] };
  }
};
