"use client";
import { Image } from "@nextui-org/image";
import SectionLayout from "./Sections";
import NextImage from "next/image";

export const Hero = () => {
  return (
    <SectionLayout id="inicio">
      <article className="flex items-center justify-center">
        <div className="flex-1 text-balance">
          <h1 className="w-96 text-4xl font-semibold capitalize leading-relaxed">
            Eleva tu estilo con los cortes premium de
            <span className="text-primary"> Juanes Barber's</span>
          </h1>
          <p className="text-pretty text-xl">
            Experimenta un nuevo nivel de estilo con los servicios excepcionales
            de corte, arreglo y peinado de Juanes Barber's, diseñados para
            elevar tu apariencia.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center pb-28">
          <Image
            as={NextImage}
            src="/img/hero/portada.png"
            isZoomed
            isBlurred
            width={400}
            height={600}
            alt="Fotografia de portada de Juanes Barber's"
          />
        </div>
      </article>
    </SectionLayout>
  );
};
