import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import SearchBar from "../search-bar/search-bar";
import { Row, Col, Button } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = searchQuery.length === 0
    ? movies
    : movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );


  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.map(movie => ({
          id: movie._id,
          title: movie.Title,
          director: movie.Director.Name,
          description: movie.Description,
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
      <NavigationBar user={user} setToken={setToken} setUser={setUser} handleLogout={handleLogout} />
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
              <SearchBar onSearch={setSearchQuery} />
                <Row>
                  {filteredMovies.length > 0 ? filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} user={user} token={token} setUser={setUser} />
                  )) : <div>The list is empty</div>}
                </Row>
              </Col>
            )
          }/>
          <Route path="/profile" element={<ProfileView user={user} setUser={setUser} movies={movies} token={token} />} />
        </Routes>
      </Row>
    </Router>
  );
};
