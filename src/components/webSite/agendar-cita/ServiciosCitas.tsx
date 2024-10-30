"use client";

import { getServicios } from "@/lib/api/cita/servicios";
import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ServicioData } from "@/types/servicios.type";
import { RadioGroup, Radio } from "@nextui-org/radio";

export const ServiciosCitas = () => {
  const [servicios, setServicios] = useState<ServicioData[]>([]);
  const dataServicios = async () => {
    const { data } = await getServicios();
    setServicios(data);
  };

  useEffect(() => {
    dataServicios();
  }, []);
  const minutos = (tiempo: string) => {
    const [horas, minutos] = tiempo?.split(":").map(Number);
    return horas * 60 + minutos;
  };
  const formatQuetzales = (precio: number) => {
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
    }).format(precio);
  };
  return (
    <div>
      <Accordion>
        {servicios.map(({ id, nombre, descripcion, tipo_servicios }) => (
          <AccordionItem key={id} title={nombre} subtitle={descripcion}>
            <RadioGroup>
              {tipo_servicios.map(
                ({ id, tipo, precio, tiempo, documentId }) => (
                  <div key={id} className="my-2 flex flex-col">
                    <Radio value={documentId}>{tipo}</Radio>
                    <small className="pl-7">
                      {minutos(tiempo?.toString())} mins -{" "}
                      {formatQuetzales(precio)}
                    </small>
                  </div>
                ),
              )}
            </RadioGroup>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
