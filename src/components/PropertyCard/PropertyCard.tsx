import React from 'react';
import { formatCurrency, propertyImage } from '../../utilities';
import { IoLocationSharp } from 'react-icons/io5';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography, capitalize } from '@mui/material';
import { Property } from '../../@types';
import useBookingModalStore from '../../stores/bookingModal';

type PropertyCardProps = {
  property: Property;
  noOfBookings: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, noOfBookings }) => {
  const [
    setIsOpen,
    setMode,
    setProperty
  ] = useBookingModalStore((state) => [
    state.setIsOpen,
    state.setMode,
    state.setProperty
  ]);

  const handleClick = () => {
    setMode('create');
    setProperty(property);
    setIsOpen(true);
  }

  return (
    <Card className="flex flex-col h-full">
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          className="object-cover w-full h-56"
          image={propertyImage(property)}
          alt={property.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className='flex justify-between align-middle'>
            <div>
              <p className="font-bold text-primary-dark">{property.title}</p>
              <p className="mb-2 text-xs text-gray-500">
                <IoLocationSharp className='inline-block mr-1 text-gray-500' />
                {property.location}
              </p>
            </div>
            <Chip
              label={formatCurrency(property.price)}
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
              }} 
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.description}
          </Typography>
          
        </CardContent>
        
      </CardActionArea>
      <div className="flex items-center p-4 mt-auto bg-blue-50 min-h-12">
        <div>
        {noOfBookings > 0 &&
          <p className='text-sm'>
            <span className="font-bold">{noOfBookings}</span>
            {noOfBookings === 1 ? " booking" : ` bookings`}
          </p>
        }
        </div>
        <div className='ml-auto'>
          <Chip
            label={capitalize(property.type)}
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
            }} 
          />
          </div>
      </div>
    </Card>
  );
};

export default PropertyCard;