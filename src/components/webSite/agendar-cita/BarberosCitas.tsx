"use client";
import { useBarberosStore } from "@/store/servicios/useBarberosStore";
import { Avatar } from "@nextui-org/avatar";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useEffect } from "react";

export const BarberosCitas = () => {
  const getBarberos = useBarberosStore((state) => state.dataBarberos);
  const dataBarberos = useBarberosStore((state) => state.barberos);
  const error = useBarberosStore((state) => state.error);

  useEffect(() => {
    getBarberos();
  }, []);

  return (
    <RadioGroup>
      {dataBarberos.map(({ id, documentId, estado, usuario }) => {
        return (
          estado && (
            <div key={id} className="my-2 flex flex-col">
              <Radio value={documentId}>
                <div className="flex items-center justify-center gap-3">
                  <Avatar showFallback name={usuario.nombres} size="lg" />
                  <div className="flex flex-col">
                    <span>{usuario.nombres}</span>
                    <small className="capitalize italic text-gray-300">
                      {usuario.rol.nombre.toLowerCase()}
                    </small>
                  </div>
                </div>
              </Radio>
            </div>
          )
        );
      })}
    </RadioGroup>
  );
};
