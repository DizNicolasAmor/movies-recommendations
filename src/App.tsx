import React from 'react';
import { ToastContainer } from 'react-toastify';
import Authentication from './components/Authentication/Authentication';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div data-testid="app">
      <Authentication />
      <ToastContainer />
    </div>
  );
}

export default App;
