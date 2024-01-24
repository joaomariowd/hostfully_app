import { Property } from "../@types";

export const propertyImage = (property: Property) => "/properties/p" + property.id.toString() + ".png"
