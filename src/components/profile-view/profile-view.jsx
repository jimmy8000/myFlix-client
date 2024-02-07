import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, token, setUser, movies }) => {
  const [editMode, setEditMode] = useState(false);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const FavoriteMovies = user.FavoriteMovies
    ? movies.filter((movie) => user.FavoriteMovies.includes(movie.id))
    : [];

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const updatedInfo = {
      Username: event.target.username.value,
      Email: event.target.email.value,
      Birthday: event.target.birthday.value,
    };

    fetch(
      `https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedInfo),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then((updatedInfo) => {
        localStorage.setItem("user", JSON.stringify(updatedInfo));
        setUser(updatedInfo);
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your profile? This action cannot be undone."
      )
    ) {
      fetch(
        `https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response) => {
        if (response.ok) {
          setUser(null);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          alert("Your account has been deleted");
        } else {
          alert("something went wrong.");
        }
      });
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              {editMode ? (
                <Form onSubmit={handleUpdateUser}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      defaultValue={user.Username}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      defaultValue={user.Email}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthday"
                      defaultValue={user.Birthday}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Form>
              ) : (
                <>
                  <Card.Title>Profile Information</Card.Title>
                  <Card.Text>
                    <strong>Username:</strong> {user.Username}
                  </Card.Text>
                  <Card.Text>
                    <strong>Email:</strong> {user.Email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Birthday:</strong> {user.Birthday}
                  </Card.Text>
                  <Button variant="primary" onClick={handleEdit}>
                    Edit Profile
                  </Button>
                  <Button variant="secondary" onClick={handleDelete}>
                    Delete Profile
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mx-3 my-4">
        <h2>Favorite movies</h2>
        {FavoriteMovies.map((movie) => {
          return (
            <Col key={movie.id} className="m-3">
              <MovieCard
                movie={movie}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
