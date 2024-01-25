import { TableCell, TableContainer, TableHead, TableRow, Table, Paper, TableBody, Button } from '@mui/material';
import { Booking } from '../../@types';
import { formatCurrency } from '../../utilities';
import moment from 'moment';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

type BookingsTableProps = {
  propertyId: string;
  bookings: Booking[];
  handleDelete: (bookingId: number) => void;
  handleEdit: (bookingId: number) => void;
}

const BookingsTable = ({ propertyId, bookings, handleDelete, handleEdit }: BookingsTableProps) => {
  return (
    <TableContainer className="px-8" component={Paper}>
      <Table className="max-w-fit">
        <TableHead>
          <TableRow>
            <TableCell>Booking #</TableCell>
            <TableCell>Period</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Check-in</TableCell>
            <TableCell>Check-out</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings
            .filter((booking: Booking) => booking.propertyId === parseInt(propertyId))
            .map((booking: Booking) => (
              <TableRow key={booking.id}>
                <TableCell align="center">{booking.id}</TableCell>
                <TableCell>{booking.period} day{booking.period > 1 && 's'}</TableCell>
                <TableCell align="right">{formatCurrency(booking.price)}</TableCell>
                <TableCell align="right">{formatCurrency(booking.total)}</TableCell>
                <TableCell>{moment(booking.checkIn).format('MMMM Do YYYY')}</TableCell>
                <TableCell>{moment(booking.checkOut).format('MMMM Do YYYY')}</TableCell>
                <TableCell align="right">
                  <div className="flex gap-2">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(booking.id)}
                    >
                      <FaRegEdit />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(booking.id)}
                    >
                      <FaRegTrashAlt />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BookingsTable;