import { getCalendario } from "@/lib/api/cita/calendario";
import { create } from "zustand";

interface CalendarioStore {
  calendario: any;
  loading: boolean;
  error: boolean;
  dataCalendario: (id: string) => Promise<void>;
}

export const useCalendarioStore = create<CalendarioStore>()((set) => ({
  calendario: [],
  loading: true,
  error: false,
  dataCalendario: async (id) => {
    const { data } = await getCalendario(id);
    set({ calendario: data, loading: false, error: false });
  },
}));
