import { Box, Modal, Typography } from '@mui/material';
import useBookingModalStore from '../../stores/bookingModal';

const BookingModal = () => {
  const [isOpen, property, setIsOpen, setProperty] = useBookingModalStore((state) => [
    state.isOpen,
    state.property,
    state.setIsOpen,
    state.setProperty,
  ]);

  const handleClose = () => {
    setProperty(null);
    setIsOpen(false)
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {property?.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Dummy text of the printing and typesetting industry.
        </Typography>
      </Box>
    </Modal>
  )
}

export default BookingModal