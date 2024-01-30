import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col, Button, Container } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      console.log("No token available");
      return;
    }
  
    console.log("Fetching movies with token:", token);
    fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.json())
    .then(data => {
      console.log("Movies fetched:", data);
      const moviesFromApi = data.map(movie => ({
        id: movie._id,
        title: movie.Title,
        director: movie.Director.Name,
        genre: movie.Genre.Name,
        image: movie.ImagePath
      }));
      setMovies(moviesFromApi);
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
    });
  }, [token]);

  let similarMovies = [];
  if (selectedMovie) {
    similarMovies = movies.filter(movie => 
      movie.genre === selectedMovie.genre && movie.id !== selectedMovie.id
    );
  }

  return (
      <Row className="justify-content-md-center my-4">
        {!user ? (
          <Col md={5}>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }}
            />
            <hr />
            <SignupView />
          </Col>
        ) : selectedMovie ? (
          <Col md={8}>
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
            <hr />
            <h2>Similar Movies</h2>
            <Row>
              {similarMovies.map(movie => (
                <Col md={4} key={movie.id}>
                  <MovieCard 
                    movie={movie}
                    onMovieClick={newSelectedMovie => setSelectedMovie(newSelectedMovie)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        ) : movies.length === 0 ? (
          <Col>
            <div>The list is empty</div>
          </Col>
        ) : (
          <Col>
            <Row>
              {movies.map(movie => (
                  <MovieCard
                    movie={movie}
                    onMovieClick={newSelectedMovie => setSelectedMovie(newSelectedMovie)}
                  />
              ))}
            </Row>
            <Button variant="secondary" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
              Logout
            </Button>
          </Col>
        )}
      </Row>
  );
};
