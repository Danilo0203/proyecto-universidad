"use client";

import SectionLayout from "./Sections";
import { Subtitle } from "../ui/Subtitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export const Productos = () => {
  return (
    <SectionLayout id="productos">
      <article className="flex w-full flex-grow flex-col items-center justify-between">
        <div>
          <Subtitle title="Productos" />
        </div>
        <div className="mt-20 flex w-full flex-1 justify-center">
          <Swiper slidesPerView={2} speed={100} spaceBetween={10}>
            <SwiperSlide className="!flex items-start justify-center">
              <Card className="flex w-fit flex-col bg-black px-10 py-5">
                <CardHeader className="text-3xl font-semibold">Cera</CardHeader>
                <CardBody>
                  <Image src="/img/productos/cera.png" />
                </CardBody>
                <CardFooter className="text-xl font-medium">
                  Precio: Q25
                </CardFooter>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="!flex items-start justify-center">
              <Card className="flex w-fit flex-col bg-black px-10 py-5">
                <CardHeader className="text-3xl font-semibold">
                  Crema
                </CardHeader>
                <CardBody>
                  <Image src="/img/productos/crema.png" />
                </CardBody>
                <CardFooter className="text-xl font-medium">
                  Precio: Q25
                </CardFooter>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </SectionLayout>
  );
};
