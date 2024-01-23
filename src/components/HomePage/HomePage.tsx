import React from 'react';
import properties from '../../../data/properties.json';
import { GiBlockHouse } from 'react-icons/gi';
import { PropertyCard } from '..';
import { propertyImage } from '../../utilities';

const HomePage: React.FC = () => {
  return (
    <>
    <div className="flex align-middle">
      <GiBlockHouse className="text-primary-dark mr-2 w-8 h-auto" />
      <h1>Available Properties</h1>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
    </>
  );
};

export default HomePage;