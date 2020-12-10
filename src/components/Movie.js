import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';
import { Link} from 'react-router-dom';
function Movie({ title, year, summary, poster, genres,    rating,runtime }) {
  return (
    <div className="movie">
      <Link to={{pathname: '/movie-detail', state: {year, title, summary, poster, genres    ,rating, runtime},}}>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: propTypes.number.isRequired,
  title: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  runtime: propTypes.number.isRequired,

};
export default Movie;