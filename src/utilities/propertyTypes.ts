import { Item, Property } from '../@types';
import { capitalize } from './capitalize';

export const propertyTypes = (properties: Property[]) => {
  const types = properties.map(property => ({ text: property.type, title: capitalize(property.type) }));
  const uniqueTypes = types.reduce((uniqueArr: Item[], item: Item) => {
    if(!uniqueArr.some((obj: Item) => obj.text === item.text)) {
      uniqueArr.push(item);
    }
    return uniqueArr;
  },[]);
  uniqueTypes.unshift({ text: "all", title: "All" });
  return uniqueTypes;
}