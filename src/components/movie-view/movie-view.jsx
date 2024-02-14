import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieView = ({ movie }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 mx-auto">
          <img src={movie.image} alt={`${movie.title} cover`} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text"><strong>Director:</strong> {movie.director}</p>
              <p className="card-text"><strong>Description:</strong> {movie.description}</p>
              <Link to="/" className="btn btn-primary">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};
