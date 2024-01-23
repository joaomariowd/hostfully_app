import React from 'react';
import properties from '../../../data/properties.json';
import { GiBlockHouse } from 'react-icons/gi';

const HomePage: React.FC = () => {
  return (
    <>
    <div className="flex align-middle">
      <GiBlockHouse className="text-primary-dark mr-2 w-8 h-auto" />
      <h1>Available Properties</h1>
    </div>
    
    {properties.map((property) => (
      <p key={property.id}>{property.title}</p> 
    ))}
    </>
  );
};

export default HomePage;