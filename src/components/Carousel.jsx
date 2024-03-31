import React, { useEffect, useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('films.json');
      const data = await response.json();
      const featuredMovies = data.filter(movie => movie.featured);
      setMovies(featuredMovies);
      const johnWick4Index = featuredMovies.findIndex(movie => movie.title === 'John Wick 4');
      setCurrentSlide(johnWick4Index >= 0 ? johnWick4Index : 0);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + movies.length) % movies.length);
  };

  return (
    <div id='featured' className="carousel-container" style={{ backgroundImage: `url(${movies[currentSlide]?.backgroundImage || 'src/img/landing-background.png'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="carousel-content">

    <img id='prev-btn' src="src/img/less-than.png" alt="Previous" className="carousel-btn prev-btn" onClick={prevSlide} />
    <div className="carousel" id="movieCarousel">
        {movies.length > 0 && (
          <div className="carousel-slide">
            <div className="movie-poster-container">
              <img
                src={movies[currentSlide]?.poster}
                alt={movies[currentSlide]?.title}
                className="movie-poster"
                style={{ width: '100%', height: '490px', objectFit: 'cover' }}
              />
              <div className="rating-button">
              <div className="star">★ {movies[currentSlide]?.rating}</div>                <div className="imdb">IMDB</div>
              </div>
            </div>

            <div className="movie-info">
              <h2 className='movie-title' style={{ fontSize: '30px', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movies[currentSlide]?.title}</h2>
              <hr style={{ borderTop: '1px solid black', width: '100%', margin: '5px 0' }} />
              <p className='movie-paragraph' style={{ textAlign: 'left' }}>{movies[currentSlide]?.description}</p>
            </div>
          </div>
        )}
      </div>
      </div>
      <img id='next-btn' src="src/img/more-than.png" alt="Next" className="carousel-btn next-btn" onClick={nextSlide} />
      <div className="button-container">
        <div className="img-container">
          <img className='img-play' src="src/img/Play.png" alt="Ver trailer" />
        </div>

        <button  className="trailer-btn" onClick={nextSlide}>
          Ver trailer
        </button>
        <div className="img-container">
        <a href="#buy">
          <img className='img-ticket' src="src/img/Movie Ticket.png" alt="Comprar ticket" />
          </a>
        </div>
        <button  className="ticket-btn" onClick={nextSlide}>
          Comprar ticket
        </button>
      </div>
    </div>
  );
}

export default Carousel;
