import { Box, Button, Chip, Modal, Typography } from '@mui/material';
import useBookingModalStore from '../../stores/bookingModal';
import { IoLocationSharp } from 'react-icons/io5';
import { formatCurrency, newBookingId, numberOfDays, propertyBookedDates, propertyBookings } from '../../utilities';
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import useBookingsStore from '../../stores/bookings';
import { Booking } from '../../@types';

const BookingModal = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [errorMessage, setErrorMessage] = useState<string>();
  
  const [
    bookingId,
    isOpen,
    mode,
    property,
    setIsOpen,
    setMode,
    setProperty
  ] = useBookingModalStore((state) => [
    state.bookingId,
    state.isOpen,
    state.mode,
    state.property,
    state.setIsOpen,
    state.setMode,
    state.setProperty,
  ]);

  const [bookings, setBookings] = useBookingsStore((state) => [
    state.bookings,
    state.setBookings,
  ]);

  const booking = bookings.find((booking) => booking.id === bookingId);

  useEffect(() => {
    if (mode === 'edit') {
      setCheckIn(booking?.checkIn);
      setCheckOut(booking?.checkOut);
    }
  }, [booking, mode]);

  const handleClose = () => {
    setProperty(null);
    setCheckIn(undefined);
    setCheckOut(undefined);
    setErrorMessage(undefined);
    setMode('create');
    setIsOpen(false)
  };

  if(!property) return;

  const handleNewBooking = () => {
    if(!checkIn || !checkOut || !property) {
      setErrorMessage('Please select a date range before proceeding.');
      return;
    }

    const newBooking: Booking = {
      id: newBookingId(bookings),
      propertyId: property.id,
      checkIn: checkIn,
      checkOut: checkOut,
      period: numberOfDays(checkIn, checkOut),
      price: property.price,
      total: property.price * numberOfDays(checkIn, checkOut),
    };
    
    setBookings([...bookings, newBooking]);
    handleClose();
  }

  const handleEditBooking = () => {
    if(!checkIn || !checkOut || !booking) {
      setErrorMessage('Please select a date range before proceeding.');
      return;
    }

    booking.checkIn = checkIn;
    booking.checkOut = checkOut;
    booking.period = numberOfDays(checkIn, checkOut);
    booking.total = property.price * numberOfDays(checkIn, checkOut);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className='absolute w-full p-4 transform -translate-x-1/2 border-4 rounded-lg shadow-lg landscape:top-0 landscape:md:top-1/4 top-1/4 lg:w-1/2 border-primary bg-paper left-1/2 min-h-56'
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
          <Typography gutterBottom variant="h4" component="h2" color="#999" className='text-center md:text-left'>
            {mode === "create" ? "Book now!" : "Edit booking"}
          </Typography>
          <div className="flex flex-col gap-4 lg:gap-8 md:flex-row">
            <div className='text-center'>
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
                excludeDates={propertyBookedDates(propertyBookings(bookings, property.id), bookingId)}
              />
            </div>

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
                <div className='flex gap-2'>
                  <Button
                    variant="contained"
                    color="info"
                    className='w-fit'
                    onClick={mode === "create" ? handleNewBooking : handleEditBooking}
                  >
                    Proceed
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className='w-fit'
                    onClick={() => handleClose()}
                  >
                    Cancel
                  </Button>
                </div>
              </div>

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