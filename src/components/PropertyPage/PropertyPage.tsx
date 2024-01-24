import { useParams } from "react-router-dom"
import useReservationsStore from "../../stores/bookings";
import { Booking } from "../../@types";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { propertyImage } from "../../utilities";
import properties from '../../../data/properties.json';
import { IoLocationSharp } from "react-icons/io5";
import { Error } from "..";

const Property = () => {
  const [ bookings ] = useReservationsStore((state) => [ state.bookings ]);
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
        {property.location}
      </div>
    </Box>
    <TableContainer className="px-8" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Booking #</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Days</TableCell>
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
                <TableCell>{booking.guests}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>2</TableCell>
                <TableCell>200</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Property