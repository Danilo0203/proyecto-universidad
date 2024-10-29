"use client";
import SectionLayout from "./Sections";
import { Subtitle } from "../ui/Subtitle";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export const Ubicacion = () => {
  const API_KEY = "AIzaSyC6_DsuQzGUqXHDhCPBeFFie2WDfnbSeuA";
  return (
    <SectionLayout id="ubicacion" className="mt-56">
      <article className="flex w-full flex-grow flex-col items-center justify-between">
        <div>
          <Subtitle title="Ubicación" />
        </div>
        <div className="mt-20 flex w-full flex-1 justify-around">
          <APIProvider apiKey={API_KEY}>
            <Map
              style={{ width: "100vw", height: "35rem" }}
              defaultCenter={{ lat: 14.913991, lng: -92.056804 }}
              defaultZoom={18}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <Marker position={{ lat: 14.913991, lng: -92.056804 }} />
            </Map>
          </APIProvider>
        </div>
      </article>
    </SectionLayout>
  );
};
