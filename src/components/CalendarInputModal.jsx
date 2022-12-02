import * as React from 'react';
import DatePicker from '../components/DatePicker';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../store/reducer/calendarSlice';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const TextFieldstyle = {
  width: 300,
  mt: 1,
};

export default function EventInputModal({ value, setValue }) {
  const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const { activeUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendData = () => {
    handleClose();
    if (inputValue) {
      const event = { date: value, description: inputValue, user: activeUser };
      dispatch(addEvent(event));
    }
    setInputValue('');
  };

  return (
    <Box>
      <Button
        sx={{
          border: 1,
          borderColor: 'grey.500',
          bgcolor: '#fac601',
          color: 'black',
          height: '50px',
        }}
        onClick={handleOpen}>
        Добавить событие
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <FormControl>
              <DatePicker value={value} setValue={setValue} setOpen={setOpen} />
              <TextField
                value={inputValue}
                onChange={(value) => setInputValue(value.target.value)}
                label="Введите событие"
                sx={TextFieldstyle}
              />
              <Button
                onClick={sendData}
                sx={TextFieldstyle}
                size="large"
                variant="outlined"
                href="#outlined-buttons">
                Добавить событие
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
