import { Booking } from "../@types";

export const propertyBookings = (bookings: Booking[], propertyId: string) => bookings
  .filter((booking: Booking) => booking.propertyId === parseInt(propertyId));