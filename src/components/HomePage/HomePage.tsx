import React, { useState } from 'react';
import properties from '../../../data/properties.json';
import { GiBlockHouse } from 'react-icons/gi';
import { ItemsSelect as PropertyTypeFilter, PropertyCard } from '..';
import { Property } from '../../@types/Property';
import { SelectChangeEvent } from '@mui/material';
import { propertyTypes } from '../../utilities';

const HomePage: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>('all');
  const [propertiesList, setPropertiesList] = useState<Property[]>(properties);

  const handleFilterChange = (e: SelectChangeEvent) => {
    setFilterValue(e.target.value);
    if(e.target.value === 'all') {
      setPropertiesList(properties);
      return;
    }

    const filteredProperties = properties.filter((property: Property) => property.type === e.target.value);
    setPropertiesList(filteredProperties);
  }

  return (
    <>
    <div className="flex flex-col md:flex-row justify-between align-middle mt-2 md:mt-4 lg:mt-6 mb-8 md:mb-0">
        <h1 className='w-fit'>
          <GiBlockHouse className="text-neutral-700 mr-2 w-8 h-auto mb-2 inline-block" />
          Available Properties
        </h1>
        <PropertyTypeFilter
          title='Type'
          label='type'
          list={propertyTypes()}
          handleChange={handleFilterChange}
          value={filterValue}
        />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {propertiesList
        .sort((a: Property, b: Property) => a.title.localeCompare(b.title))
        .map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))
      }
    </div>
    </>
  );
};

export default HomePage;