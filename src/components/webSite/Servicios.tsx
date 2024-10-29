"use client";
import SectionLayout from "./Sections";
import { Subtitle } from "../ui/Subtitle";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export const Servicios = () => {
  return (
    <SectionLayout id="servicios">
      <article className="flex w-full flex-grow flex-col items-center justify-between">
        <div>
          <Subtitle title="Servicios" />
        </div>
        <div className="mt-20 flex w-full flex-1 justify-around">
          <div className="h-fit">
            <div>
              <DirectionAwareHover imageUrl="/img/servicios/servicio1.png">
                <p className="text-xl font-medium">
                  Nuestros estilistas experimentados son expertos en crear una
                  amplia variedad de estilos de peinado para adaptarse a tus
                  preferencias.
                </p>
              </DirectionAwareHover>
              <span className="pt-4 text-3xl font-bold uppercase text-white">
                CORTE DE CABELLO
              </span>
            </div>
          </div>
          <div>
            <DirectionAwareHover imageUrl="/img/servicios/servicio2.png">
              <p className="text-xl font-medium">
                Nuestros estilistas experimentados son expertos en crear una
                amplia variedad de estilos de peinado para adaptarse a tus
                preferencias.
              </p>
            </DirectionAwareHover>
            <span className="text-3xl font-bold uppercase text-white">
              Afeitado de barba
            </span>
          </div>
        </div>
      </article>
    </SectionLayout>
  );
};
