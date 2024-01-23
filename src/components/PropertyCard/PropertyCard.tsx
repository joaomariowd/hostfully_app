import React from 'react';
import { formatCurrency, propertyImage } from '../../utilities';
import { Property } from '../../@types/Property';
import { IoLocationSharp } from 'react-icons/io5';

type PropertyCardProps = {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-paper">
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={propertyImage(property)} alt={property.title} />
      </div>
      <div className="px-6 py-4 pb-2 h-48">
        <div className="font-bold text-md text-primary-dark">{property.title}</div>
        <p className="text-xs mb-2 text-gray-500">
          <IoLocationSharp className='inline-block text-gray-500 mr-1' />
          {property.location}
        </p>
        <p className="text-neutral-700 text-base">{property.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{formatCurrency(property.price)}</span>
      </div>
    </div>
  );
};

export default PropertyCard;