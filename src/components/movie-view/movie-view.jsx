import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieView = ({ movie }) => {
  return (
    <div className="movie-view">
      <img src={movie.image} alt={`${movie.title} cover`} />
      <div className="movie-details">
        <div className="movie-detail movie-title">{movie.title}</div>
        <div className="movie-detail movie-director">{movie.director}</div>
        <div className="movie-detail movie-release-year">{movie.releaseYear}</div>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.string,
    releaseYear: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};
