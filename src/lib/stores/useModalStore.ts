import { create } from "zustand";
import type { RoomType } from "@/types";

interface ModalStore {
  open: boolean;
  roomId: RoomType | null;
  openModal: (roomId: RoomType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  open: false,
  roomId: null,
  openModal: (roomId) => set({ open: true, roomId }),
  closeModal: () => set({ open: false, roomId: null }),
}));
