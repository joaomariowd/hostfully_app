import React, { useState } from 'react';
import properties from '../../../data/properties.json';
import { GiBlockHouse } from 'react-icons/gi';
import { ItemsSelect as PropertyTypeFilter, PropertyCard } from '..';
import { SelectChangeEvent } from '@mui/material';
import { propertyTypes } from '../../utilities';
import { Property } from '../../@types';

const types = propertyTypes(properties);

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
    <div className="p-4">
      <div className="flex flex-col justify-between mt-2 mb-8 align-middle md:flex-row md:mt-4 lg:mt-6 md:mb-0">
          <h1 className='w-fit'>
            <GiBlockHouse className="inline-block w-8 h-auto mb-2 mr-2 text-neutral-700" />
            Available Properties
          </h1>
          <PropertyTypeFilter
            title='Type'
            label='type'
            list={types}
            handleChange={handleFilterChange}
            value={filterValue}
          />
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </div>
  );
};

export default HomePage;