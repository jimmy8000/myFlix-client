import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Col md={4} className="mb-3">
      <Card className="h-100">
        <Card.Img variant="top" src={movie.image} style={{ objectFit: 'cover', height: '100%' }} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.director}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    director: PropTypes.string
  }).isRequired
};
