import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, token, setUser, user }) => {
  
  const handleFavorites = () => {
    fetch(
      `https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add to favorites");
        }
        return response.json();
      })
      .then((updatedUser) => {
        setUser(updatedUser);
        alert(`${movie.title} added to favorites!`);
      })
      .catch((error) => {
        console.error("Error adding movie to favorites:", error);
        alert("Could not add movie to favorites.");
      });
  };

  const handleRemoveFromFavorites = () => {
    fetch(
      `https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove from favorites");
        }
        return response.json();
      })
      .then((updatedUser) => {
        setUser(updatedUser);
        alert(`${movie.title} removed from favorites!`);
      })
      .catch((error) => {
        console.error("Error removing movie from favorites:", error);
        alert("Could not remove movie from favorites.");
      });
  };

  const isFavorite = user.FavoriteMovies.find(movieId => movie.id === movieId)

  return (
    <Col md={3} lg={2} className="mb-3">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={movie.image}
          style={{ objectFit: "cover", height: "100%" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.director}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button variant="link">Open</Button>
          </Link>
          {isFavorite ? <Button variant="danger" onClick={handleRemoveFromFavorites}>Remove from Favorites</Button> : <Button variant="primary" onClick={handleFavorites}>Add to Favorites</Button>}
          
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
    director: PropTypes.string,
  }).isRequired,
};
