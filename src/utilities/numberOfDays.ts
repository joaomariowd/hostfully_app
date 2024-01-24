import moment from "moment";

export const numberOfDays = (startDate: Date | undefined, endDate: Date | undefined) =>
  endDate && startDate ?
    moment(endDate).diff(moment(startDate), 'days')
  :
    0;