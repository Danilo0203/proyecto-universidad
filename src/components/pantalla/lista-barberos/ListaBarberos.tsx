import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ItemLista } from "../item-lista/ItemLista";

const listaAtendiendo = [
  // {
  //   id: 5,
  //   barber: "Danilo",
  //   pacients: [
  //     {
  //       id: 1,
  //       name: "Fernando",
  //       status: "atendiendo",
  //     },
  //     {
  //       id: 2,
  //       name: "Fernando",
  //       status: "espera",
  //     },
  //     {
  //       id: 3,
  //       name: "Fernando",
  //       status: "espera",
  //     },
  //   ],
  // },
  {
    id: 4,
    barber: "Danilo",
    // perfil: "/img/barberos/barbero.png",
    pacients: [],
  },
  {
    id: 1,
    barber: "Marlon",
    perfil: "/img/barberos/barbero.png",
    pacients: [
      {
        id: 1,
        name: "Fernando",
        status: "atendiendo",
      },
      {
        id: 2,
        name: "Fernando",
        status: "espera",
      },
      {
        id: 3,
        name: "Fernando",
        status: "espera",
      },
    ],
  },
  {
    id: 2,
    barber: "Marlon",
    perfil: "/img/barberos/barbero.png",

    pacients: [
      {
        id: 1,
        name: "Fernando",
        status: "atendiendo",
      },
      {
        id: 2,
        name: "Fernando",
        status: "espera",
      },
      {
        id: 3,
        name: "Fernando",
        status: "espera",
      },
    ],
  },
  {
    id: 3,
    barber: "Marlon",
    perfil: "/img/barberos/barbero.png",
    pacients: [
      {
        id: 1,
        name: "Fernando",
        status: "atendiendo",
      },
      {
        id: 2,
        name: "Fernando",
        status: "espera",
      },
      {
        id: 3,
        name: "Fernando",
        status: "espera",
      },
      {
        id: 4,
        name: "Fernando",
        status: "espera",
      },
    ],
  },
];
export const ListaBarberos = () => {
  return (
    <>
      <h2 className="mb-20 text-3xl font-semibold">Atendiendo:</h2>
      <article className="grid flex-1 gap-x-8 gap-y-24 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {listaAtendiendo.map(({ id, barber, pacients, perfil }) => (
          <Card key={id} className="bg-card-atendiendo overflow-visible">
            <CardHeader className="relative overflow-visible">
              <Avatar
                fallback={perfil}
                src={perfil}
                alt={`Fotografia de ${barber}`}
                className="absolute left-1/2 top-0 mx-auto h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-large"
              />
            </CardHeader>
            <CardBody className="mt-8 flex flex-col justify-start">
              <h2 className="text-center text-3xl font-semibold">{barber}</h2>
              <ul className="mt-4 flex flex-col gap-4 pb-5 md:px-6 lg:px-10 xl:px-6">
                {pacients.map(({ id, name, status }) => (
                  <ItemLista
                    key={id}
                    name={name}
                    status={status}
                    mode="atendiendo"
                  />
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </article>
    </>
  );
};
