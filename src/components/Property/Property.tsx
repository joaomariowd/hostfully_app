import { useParams } from "react-router-dom"
import useReservationsStore from "../../stores/bookings";
import { Booking } from "../../@types";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { propertyImage } from "../../utilities";
import properties from '../../../data/properties.json';

const Property = () => {
  const [ bookings ] = useReservationsStore((state) => [ state.bookings ]);
  const { id } = useParams();
  if (!id) return null;
  const property = properties.find((property) => property.id === parseInt(id));

  return (
    <>
    <Box
      sx={{
        height: '300px',
        backgroundImage: `url(${propertyImage(property)})`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center text-4xl font-bold text-white bg-center bg-primary"
    >
      {property?.title}
    </Box>
    <TableContainer component={Paper}>
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
            .filter((booking: Booking) => booking.propertyId === parseInt(id))
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
    </>
  )
}

export default Property