import { Box, Button, Chip, Modal, Typography } from '@mui/material';
import useBookingModalStore from '../../stores/bookingModal';
import { IoLocationSharp } from 'react-icons/io5';
import { formatCurrency, numberOfDays } from '../../utilities';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import useBookingsStore from '../../stores/bookings';
import { Booking } from '../../@types';
import { Error } from '../../pages';

const BookingModal = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [errorMessage, setErrorMessage] = useState<string>();
  
  const [
    isOpen,
    property,
    setIsOpen,
    setProperty
  ] = useBookingModalStore((state) => [
    state.isOpen,
    state.property,
    state.setIsOpen,
    state.setProperty,
  ]);

  const [bookings, setBookings] = useBookingsStore((state) => [
    state.bookings,
    state.setBookings,
  ]);

  const handleClose = () => {
    setProperty(null);
    setCheckIn(undefined);
    setCheckOut(undefined);
    setErrorMessage(undefined);
    setIsOpen(false)
  };

  if(!property) return (
    <Error
      title='Property not found'
      message='The property you are looking for does not exist.' 
    />
  );

  const handleClick = () => {
    if(!checkIn || !checkOut) {
      setErrorMessage('Please select a date range before proceeding.');
      return;
    }

    const newBooking: Booking = {
      id: bookings.length + 1,
      propertyId: property.id,
      checkIn: checkIn,
      checkOut: checkOut,
      period: numberOfDays(checkIn, checkOut),
      price: property.price,
      total: property.price * numberOfDays(checkIn, checkOut),
    };
    
    setBookings([...bookings, newBooking]);
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className='absolute w-1/2 p-4 transform -translate-x-1/2 border-4 rounded-lg shadow-lg border-primary bg-paper top-1/4 left-1/2 min-h-56'
      >
        <Typography gutterBottom variant="h6" component="div" className='flex justify-between align-middle'>
            <div>
              <p className="font-bold text-primary-dark">{property.title}</p>
              <p className="mb-2 text-xs text-gray-500">
                <IoLocationSharp className='inline-block mr-1 text-gray-500' />
                {property.location}
              </p>
            </div>
            <Chip
              label={formatCurrency(property?.price || 0)}
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
              }} 
            />
          </Typography>
          <Typography gutterBottom variant="h4" component="h2" color="secondary">
            Book now!
          </Typography>
          <div className="flex gap-8">
            <DatePicker
              selected={checkIn}
              onChange={(dates: [Date | null, Date | null]) => {
                setErrorMessage(undefined);
                const [startDate, endDate] = dates as [Date, Date];
                setCheckIn(startDate);
                setCheckOut(endDate);
              }}
              startDate={checkIn}
              endDate={checkOut}
              selectsRange
              inline
              minDate={moment().add(1, 'days').toDate()}
            />

            <div className='flex-1'>
              <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-4">
                <div>
                  <p className="text-lg font-bold text-primary-dark">From:</p>
                  <p className="text-lg">
                    {checkIn ?
                      moment(checkIn).format('MMMM Do YYYY')
                      :
                      'Select a date'
                    }
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-dark">To:</p>
                  <p className="text-lg">
                    {checkOut ?
                      moment(checkOut).format('MMMM Do YYYY')
                      :
                      'Select a date'
                    }
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-dark">Period:</p>
                  <p className='text-lg'>
                    {numberOfDays(checkIn, checkOut)} days
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-dark">Fare:</p>
                  <p className='text-lg'>
                    {formatCurrency(property.price)} / day
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary-dark">
                  Total:
                  </p>
                  <p className="text-lg font-bold">
                    {formatCurrency(property.price * numberOfDays(checkIn, checkOut))}
                  </p>
                </div>
                <div className='flex'>
                  <Button
                    variant="contained"
                    color="secondary"
                    className='w-full'
                    onClick={handleClick}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
              <div>{bookings.length}</div>
              {errorMessage &&
                <div className="p-2 font-bold text-red-500 bg-red-200 border border-red-500 rounded">
                  {errorMessage}
                </div>
              }
            </div>
          </div>
      </Box>
    </Modal>
  )
}

export default BookingModal