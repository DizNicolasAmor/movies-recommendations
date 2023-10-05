import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from '@mui/material';
import Authentication from './components/Authentication/Authentication';
import { Header } from './components/Header';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Box data-testid="app">
      <Header />
      <Authentication />
      <ToastContainer />
    </Box>
  );
}

export default App;
