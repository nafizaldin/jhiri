import { create } from "zustand";
import type { ToastType } from "@/types";

interface ToastStore {
  message: string;
  type: ToastType;
  visible: boolean;
  showToast: (message: string, type?: ToastType) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  message: "",
  type: "",
  visible: false,
  showToast: (message, type = "") => {
    set({ message, type, visible: true });
    setTimeout(() => set({ visible: false }), 3500);
  },
}));
