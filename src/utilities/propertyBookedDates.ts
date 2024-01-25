import moment from "moment";
import { numberOfDays } from ".";
import { Booking } from "../@types";

export const propertyBookedDates = (bookings: Booking[], bookingId: number | null) => {
  const bookedDates: Date[] = [];

  if (bookingId) {
    bookings = bookings.filter((booking) => booking.id !== bookingId);
  }

  bookings.forEach((booking) => {
    const period = numberOfDays(booking.checkIn, booking.checkOut);
    for (let i = 0; i <= period; i++) {
      const date = moment(booking.checkIn).clone().add(i, 'days').toDate();
      bookedDates.push(date);
    }
  });
  return bookedDates;
};