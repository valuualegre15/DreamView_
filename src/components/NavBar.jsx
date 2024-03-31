import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/img/logo.svg" alt="DreamView Logo" />
      </div>
      <ul className="navbar-links">
        <li><a className="featured" href="#featured">Destacadas</a></li>
        <li><a className='featured' href="#cartelera">Cartelera</a></li>
        <li><a className="buy-btn" href="#buy">Comprar Ticket</a></li>
        <a href="#buy">
        <img className="ticket-buy" src="src/img/Movie Ticket.png" alt="Comprar Ticket" />
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
