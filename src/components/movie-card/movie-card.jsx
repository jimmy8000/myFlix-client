import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Col md={4} className="mb-3">
      <Card className="h-100" onClick={() => onMovieClick(movie)}>
        <Card.Img variant="top" src={movie.image} style={{ objectFit: 'cover', height: '100%' }} />
        <Card.Body>
          <Card.Title className='cursor-pointer'>{movie.title}</Card.Title>
          <Card.Text>{movie.director}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    director: PropTypes.string // Assuming you want to display the director's name
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
