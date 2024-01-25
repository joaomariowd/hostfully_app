import { Booking } from "../@types";

export const newBookingId = (bookings: Booking[]) => {
  if (bookings.length === 0) return 1;
  const ids = bookings.map((booking) => booking.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};