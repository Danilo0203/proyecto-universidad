"use client";
import { useBarberosStore } from "@/store/servicios/useBarberosStore";
import { useEffect } from "react";

export const BarberosCitas = () => {
  const getBarberos = useBarberosStore((state) => state.dataBarberos);
  const dataBarberos = useBarberosStore((state) => state.barberos);
  const error = useBarberosStore((state) => state.error);

  useEffect(() => {
    getBarberos();
  }, []);

  console.log(dataBarberos);

  return <div>{JSON.stringify(dataBarberos, null, 2)}</div>;
};
