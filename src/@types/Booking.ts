import { Property } from "./Property";

export type Booking = {
  id: number;
  propertyId: Property["id"];
  checkIn: string;
  checkOut: string;
  guests: number;
  price: number;
};