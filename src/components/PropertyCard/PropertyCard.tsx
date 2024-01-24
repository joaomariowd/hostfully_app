import React from 'react';
import { formatCurrency, propertyImage } from '../../utilities';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from '@mui/material';
import { Property } from '../../@types';

type PropertyCardProps = {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="overflow-hidden border rounded-md shadow-lg bg-paper border-primary-light">
      <div className="w-full h-48 overflow-hidden">
        <img className="object-cover w-full h-full" src={propertyImage(property)} alt={property.title} />
      </div>
      <div className="h-48 px-6 py-4 pb-2">
        <div className="font-bold text-md text-primary-dark">{property.title}</div>
        <p className="mb-2 text-xs text-gray-500">
          <IoLocationSharp className='inline-block mr-1 text-gray-500' />
          {property.location}
        </p>
        <p className="text-base text-neutral-700">{property.description}</p>
      </div>
      <div className="flex justify-between px-6 py-4 align-middle">
        <Button variant='contained' color='primary' size='small'>Book Now</Button>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 rounded-full bg-secondary">{formatCurrency(property.price)}</span>
      </div>
    </div>
  );
};

export default PropertyCard;