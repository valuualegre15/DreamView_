import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import './TicketForm.css'; 

function TicketForm() {
  const [step, setStep] = useState(1); 
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('films.json'); 
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleContinue = () => {
    if (step === 1) {
      setStep(step + 1);
      return;
    }

    if (fullName.trim() === '' || email.trim() === '' || phone.trim() === '') {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    setStep(step + 1);
  };

  const handleReset = () => {
    setSelectedMovie('');
    setSelectedDateTime('');
    setSelectedSeat('');
    setFullName('');
    setEmail('');
    setPhone('');
    setStep(1); 
  };



  return (
    <div id='buy' className="ticket-form-container">
      <div className="background-image"></div>
      <h2 className='title-ticket'>Comprar Ticket</h2>
      <p className='p-ticket'>Selecciona una función</p>
      {step === 1 && (
        <div className="input-container">
          <select className='input-movie' value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
            <option value="">Seleccionar película</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.title}>{movie.title}</option>
            ))}
          </select>
          <input className='input-movie' type="datetime-local" value={selectedDateTime} onChange={(e) => setSelectedDateTime(e.target.value)} placeholder="Fecha y hora" />
          <input className='input-movie' type="number" value={selectedSeat} onChange={(e) => setSelectedSeat(e.target.value)} placeholder="Fila y asiento" />
        </div>
      )}
      {step === 2 && (
        <div className="input-container">
          <input className='input-movie' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nombre completo" required />
          <input className='input-movie' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" required />
          <InputMask mask="999-999-999" className='input-movie' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" required />
        </div>
      )}
      {step === 3 && (
        <>
          <p className='p-buy'>Comprar ticket</p>
          <p className='p-buy'>Felicitaciones {fullName}</p>
          <img src="src/img/ticket.png" alt="" />
          <p className='p-buy'>Tu entrada para la función {selectedDateTime}</p>
          <p className='p-buy'>ha sido canjeada</p>
          <p className='p-buy'>Te esperamos!</p>
        </>
      )}
      <div className="buttons-container">
        {step !== 3 && (
          <button onClick={handleContinue}>{step === 1 ? 'Continuar' : 'Finalizar'}</button>
        )}
        <button onClick={handleReset}>Volver</button>
      </div>
    </div>
  );
}

export default TicketForm;
