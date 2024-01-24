import { create } from "zustand";
import { Property } from "../@types";

type State = {
  isOpen: boolean;
  property: Property | null;
};

type Actions = {
  setIsOpen: (isOpen: State["isOpen"]) => void;
  setProperty: (property: State["property"]) => void;
};

const useBookingModalStore = create<State & Actions>((set) => ({
  isOpen: false,
  property: null,
  setIsOpen: (isOpen) => set({ isOpen }),
  setProperty: (property) => set({ property }),
}));

export default useBookingModalStore;
