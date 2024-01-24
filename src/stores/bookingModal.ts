import { create } from "zustand";
import { BookingDTO, Property } from "../@types";

type State = {
  booking: BookingDTO | null;
  isOpen: boolean;
  property: Property | null;
};

type Actions = {
  setBooking: (booking: State["booking"]) => void;
  setIsOpen: (isOpen: State["isOpen"]) => void;
  setProperty: (property: State["property"]) => void;
};

const useBookingModalStore = create<State & Actions>((set) => ({
  booking: {
    id: undefined,
    propertyId: undefined,
    checkIn: undefined,
    checkOut: undefined,
    price: undefined,
    total: undefined,
  },
  isOpen: false,
  property: null,
  setBooking: (booking) => set({ booking }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setProperty: (property) => set({ property }),
}));

export default useBookingModalStore;
