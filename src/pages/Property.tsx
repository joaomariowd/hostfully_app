import { useParams } from "react-router-dom"
import useBookingsStore from "../stores/bookings";
import { Box } from "@mui/material";
import { propertyImage } from "../utilities";
import properties from '../../data/properties.json';
import { IoLocationSharp } from "react-icons/io5";
import { Error } from ".";
import BookingsTable from "../components/BookingsTable/BookingsTable";
import useBookingModalStore from "../stores/bookingModal";
import BookingModal from "../components/BookingModal/BookingModal";

const Property = () => {
  const [
    setBookingId,
    setIsOpen,
    setMode,
    setProperty
  ] = useBookingModalStore((state) => [
    state.setBookingId,
    state.setIsOpen,
    state.setMode,
    state.setProperty
  ]);
  const [ bookings, setBookings ] = useBookingsStore((state) => [ state.bookings, state.setBookings ]);
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

  const propertyBookings = bookings.filter((booking) => booking.propertyId === parseInt(propertyId));

  const handleBookingDelete = (bookingId: number) => {
    const newBookings = bookings.filter((booking) => booking.id !== bookingId);
    setBookings(newBookings);
  }

  const handleBookingEdit = (bookingId: number) => {
    setBookingId(bookingId);
    setMode('edit');
    setProperty(property);
    setIsOpen(true);
  }

  return (
    <div className="py-4">
    <Box
      sx={{
        backgroundImage: `url(${propertyImage(property)})`,
      }}
      className="flex flex-col items-center justify-center h-56 text-white bg-center bg-no-repeat bg-cover"
    >
      <div className="w-fit">
        <div className="w-full p-2 text-3xl font-bold bg-gray-300 bg-opacity-25 lg:text-5xl">
          {property?.title}
        </div>
        <div className="w-full p-2 text-2xl bg-gray-300 bg-opacity-25">
          <IoLocationSharp className='inline-block mr-1' />
          {property.location}
        </div>
      </div>
    </Box>
    {propertyBookings.length > 0 ? (
      <BookingsTable
        propertyId={propertyId}
        bookings={propertyBookings}
        handleDelete={handleBookingDelete}
        handleEdit={handleBookingEdit}
      />
    ) :
      <div className="p-4 bg-paper">No bookings for this property.</div>
    }
      <BookingModal />
    </div>
  )
}

export default Property