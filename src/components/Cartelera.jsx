import React, { useState, useEffect } from 'react';
import './Cartelera.css'; 

function Cartelera() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch('films.json'); 
      const data = await response.json();
      setPeliculas(data);
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  };

  return (
    <div id='cartelera' className="cartelera-container">
      <h2 className="title-cart">En cartelera</h2>
      <div className="cartelera">
        {peliculas.map((pelicula) => (
          <div className="cartelera-card" key={pelicula.id}>
            <div className="cartelera-card-content">
              <h3>{pelicula.title}</h3>
              <img src={pelicula.poster} alt={pelicula.titulo} />
              <button className="buy-btn">Comprar Ticket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartelera;
