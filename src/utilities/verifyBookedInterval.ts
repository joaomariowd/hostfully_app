import moment from "moment";
import { numberOfDays } from ".";

export const verifyBookedInterval = (checkIn: Date, checkOut: Date, bookedDates: Date[]) => {
  const interval = numberOfDays(checkIn, checkOut);
  const dates = [];

  for (let i = 0; i <= interval; i++) {
    const date = moment(checkIn).clone().add(i, 'days').toDate();
    dates.push(date);
  }

  const sDates = dates.map((date) => date.toDateString());
  const sBookedDates = bookedDates.map((date) => date.toDateString());
  return sDates.filter((date) => sBookedDates.includes(date)).length > 0;
}