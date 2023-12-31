import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Box data-testid="app">
      <Header />
      <ToastContainer />
    </Box>
  );
}

export default App;
