import { create } from "zustand";
import { Booking } from "../@types";


type State = {
  bookings: Booking[];
};

type Actions = {
  setBookings: (bookings: State["bookings"]) => void;
}

const useBookingsStore = create<State & Actions>((set) => ({
  bookings: [],
  setBookings: (bookings) => set({ bookings }),
}));

export default useBookingsStore;
