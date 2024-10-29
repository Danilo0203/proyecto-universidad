import { cn } from "@/lib/utils";
import { Chip } from "@nextui-org/chip";

interface ItemListaProps {
  name: string;
  mode?: "espera" | "atendiendo";
  status?: string;
}
export const ItemLista = ({
  name,
  mode = "espera",
  status = "espera",
}: ItemListaProps) => {
  if (mode === "atendiendo") {
    return (
      <li
        className={cn(
          "bg-item-espera relative rounded-3xl px-4 py-5 text-start text-2xl",
          {
            "bg-[#5E8038]": status === "atendiendo",
            "bg-item-espera bg-opacity-60": status === "espera",
          },
        )}
      >
        <Chip
          className="absolute right-0 top-0 -translate-x-[10%] translate-y-1/2 bg-black"
          size="sm"
        >
          {status}
        </Chip>
        {name}
      </li>
    );
  }

  return (
    <li className="bg-item-espera relative rounded-3xl bg-opacity-60 p-3 text-2xl sm:px-4 sm:py-5">
      <div className="absolute right-0 top-1/2 -translate-x-1/4 -translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs sm:top-0 sm:translate-y-1/2">
        {status}
      </div>
      <span className="text-xl sm:text-xl">{name}</span>
    </li>
  );
};
