import React from 'react';
import { formatCurrency, propertyImage } from '../../utilities';
import { IoLocationSharp } from 'react-icons/io5';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { Property } from '../../@types';
import useBookingModalStore from '../../stores/bookingModal';

type PropertyCardProps = {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [setIsOpen, setProperty] = useBookingModalStore((state) => [state.setIsOpen, state.setProperty]);

  const handleClick = () => {
    setProperty(property);
    setIsOpen(true);
  }

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          className="object-cover w-full h-48"
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
    </Card>
  );
};

export default PropertyCard;