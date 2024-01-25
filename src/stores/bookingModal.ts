import { create } from "zustand";
import { Property } from "../@types";

type State = {
  bookingId: number | null;
  isOpen: boolean;
  mode: "create" | "edit";
  property: Property | null;
};

type Actions = {
  setBookingId: (bookingId: State["bookingId"]) => void;
  setIsOpen: (isOpen: State["isOpen"]) => void;
  setMode: (mode: State["mode"]) => void;
  setProperty: (property: State["property"]) => void;
};

const useBookingModalStore = create<State & Actions>((set) => ({
  bookingId: null,
  isOpen: false,
  mode: "create",
  property: null,
  setBookingId: (bookingId) => set({ bookingId }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setMode: (mode) => set({ mode }),
  setProperty: (property) => set({ property }),
}));

export default useBookingModalStore;
