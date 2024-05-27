import React, { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  Container,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import AppContext from './context/context';
import { ActionCloseSnackbar } from './context/snackbar/action';

function App() {
  const {
    state: {
      snack,
    },
    dispatch,
  } = useContext(AppContext);

  const handleClose = () => {
    dispatch(ActionCloseSnackbar());
  }

  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: 'green',
          }}
          message={<span id="client-snackbar">{snack.message}</span>}
        ></SnackbarContent>
      </Snackbar>
    </>
  );
}

export default App;
