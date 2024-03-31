import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Carousel from './components/Carousel';
import Cartelera from './components/Cartelera';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cartelera />
      <TicketForm />
    </div>
  );
}

export default App;
