import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col, Button } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!token) {
      console.log("No token available");
      return;
    }

    console.log("Fetching movies with token:", token);
    fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies fetched:", data);
        setMovies(data.map(movie => ({
          id: movie._id,
          title: movie.Title,
          director: movie.Director.Name,
          genre: movie.Genre.Name,
          image: movie.ImagePath,
        })));
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [token]);

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  const MovieDetailView = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === id);

    return movie ? <MovieView movie={movie} /> : <div>Loading...</div>;
  };

  return (
    <Router>
      <NavigationBar user={user} onLoggedOut={handleLogout} />
      <Row className="justify-content-md-center my-4">
        <Routes>
          <Route path="/login" element={
            user ? <Navigate to="/" /> : (
              <Col md={5}>
                <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
              </Col>
            )
          }/>
          <Route path="/signup" element={
            user ? <Navigate to="/" /> : (
              <Col md={5}>
                <SignupView />
              </Col>
            )
          }/>
          <Route path="/movies/:id" element={
            !user ? <Navigate to="/login" replace /> : <MovieDetailView />
          }/>
          <Route path="/" element={
            !user ? <Navigate to="/login" replace /> : (
              <Col>
                <Row>
                  {movies.length > 0 ? movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  )) : <div>The list is empty</div>}
                </Row>
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </Col>
            )
          }/>
        </Routes>
      </Row>
    </Router>
  );
};
