"use client";
import SectionLayout from "./Sections";
import { Subtitle } from "../ui/Subtitle";
import { Image } from "@nextui-org/image";

export const Galeria = () => {
  return (
    <SectionLayout id="galeria">
      <article className="flex w-full flex-grow flex-col items-center">
        <div>
          <Subtitle title="Galería" />
        </div>
        <div className="mx-auto mt-20 columns-3 gap-8">
          <Image
            src="/img/galeria/Foto1.png"
            isZoomed
            className="my-4 rounded-3xl"
          />
          <Image src="/img/galeria/Foto4.png" isZoomed className="py-4" />
          <Image src="/img/galeria/Foto2.png" isZoomed className="py-4" />
          <Image src="/img/galeria/Foto3.png" isZoomed className="py-4" />
          <Image src="/img/galeria/Foto5.png" isZoomed className="py-4" />
          <Image src="/img/galeria/Foto6.png" isZoomed className="py-4" />
        </div>
      </article>
    </SectionLayout>
  );
};
