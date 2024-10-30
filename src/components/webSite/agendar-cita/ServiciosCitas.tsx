"use client";

import { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { RadioGroup, Radio } from "@nextui-org/radio";
import { useServiciosStore } from "@/store/servicios/useServiciosStore";
import { Button } from "@nextui-org/button";

export const ServiciosCitas = () => {
  const servicios = useServiciosStore((state) => state.servicios);
  const getServicios = useServiciosStore((state) => state.dataServicios);
  useEffect(() => {
    getServicios();
  }, []);

  const minutos = (tiempo: string) => {
    if (!tiempo) return 0; // Devuelve 0 si tiempo es undefined o una cadena vacía
    const [horas, minutos] = tiempo?.split(":").map(Number);
    return horas * 60 + minutos;
  };
  const formatQuetzales = (precio: number) => {
    if (!precio) return 0; // Devuelve 0 si precio es undefined o null
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
    }).format(precio);
  };
  return (
    <>
      <Accordion isCompact>
        {servicios.map(({ id, nombre, descripcion, tipo_servicios }) => (
          <AccordionItem key={id} title={nombre} subtitle={descripcion}>
            <RadioGroup>
              {tipo_servicios.map(
                ({ id, tipo, precio, tiempo, documentId, message }) =>
                  message ? (
                    <div
                      key={`message-key-${id}`}
                      className="my-2 flex flex-col"
                    >
                      <small className="font-semibold text-red-500">
                        {message}
                      </small>
                    </div>
                  ) : (
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
      <Button>Siguiente</Button>
    </>
  );
};
