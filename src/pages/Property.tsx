import { useParams } from "react-router-dom"
import useBookingsStore from "../stores/bookings";
import { Booking } from "../@types";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { formatCurrency, propertyImage } from "../utilities";
import properties from '../../data/properties.json';
import { IoLocationSharp } from "react-icons/io5";
import moment from "moment";
import { Error } from ".";

const Property = () => {
  const [ bookings ] = useBookingsStore((state) => [ state.bookings ]);
  console.log(bookings);
  const { propertyId } = useParams();
  const error = (
    <Error
      title='Property not found'
      message='The property you are looking for does not exist.' 
    />
  );
  if (!propertyId) return error;
  const property = properties.find((property) => property.id === parseInt(propertyId));
  if (!property) return error;

  return (
    <div className="py-4">
    <Box
      sx={{
        backgroundImage: `url(${propertyImage(property)})`,
      }}
      className="flex flex-col items-center justify-center h-56 text-white bg-center bg-no-repeat bg-cover"
    >
      <div className="text-5xl font-bold">{property?.title}</div>
      <div className="text-2xl">
        <IoLocationSharp className='inline-block mr-1' />
        {property.location}, {bookings.length}
      </div>
    </Box>
    <TableContainer className="px-8" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking #</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Period</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Check-in</TableCell>
            <TableCell>Check-out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings
            .filter((booking: Booking) => booking.propertyId === parseInt(propertyId))
            .map((booking: Booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>{booking.period}</TableCell>
                <TableCell>{formatCurrency(booking.total)}</TableCell>
                <TableCell>{moment(booking.checkIn).format('MMMM Do YYYY')}</TableCell>
                <TableCell>{moment(booking.checkOut).format('MMMM Do YYYY')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Property