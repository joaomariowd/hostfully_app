import { Booking } from "../@types";

export const propertyBookings = (bookings: Booking[], propertyId: string | number) => {
  if (typeof propertyId === "string") {
    propertyId = parseInt(propertyId);
  }
  return bookings.filter((booking: Booking) => booking.propertyId === propertyId);
}