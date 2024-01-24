import { create } from "zustand";
import { Booking } from "../@types";


type State = {
  bookings: Booking[];
};

type Actions = {
  setBookings: (bookings: State["bookings"]) => void;
}

const useBookingsStore = create<State & Actions>((set) => ({
  bookings: [{
    id: 10,
    propertyId: 1,
    checkIn: "2021-01-01",
    checkOut: "2021-01-02",
    guests: 2,
    price: 100
  }],
  setBookings: (bookings) => set({ bookings }),
}));

export default useBookingsStore;
