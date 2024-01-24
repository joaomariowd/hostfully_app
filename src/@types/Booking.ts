import { Property } from "./Property";

export type Booking = {
  id: number;
  propertyId: Property["id"];
  checkIn: Date;
  checkOut: Date;
  period: number;
  price: number;
  total: number;
};

export type BookingDTO = {
  id?: number;
  propertyId?: Property["id"];
  checkIn?: Date;
  checkOut?: Date;
  period?: number;
  price?: number;
  total?: number;
};