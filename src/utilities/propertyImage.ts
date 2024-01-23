import { Property } from "../@types/Property";

export const propertyImage = (property: Property) => "/properties/p" + property.id.toString() + ".png"
