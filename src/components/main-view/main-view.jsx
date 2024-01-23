import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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
      }));
      setMovies(moviesFromApi);
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
    });
  }, [token]);
  
  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <SignupView />
      </>
    );
  }


  if (selectedMovie) {
    let similarMovies = movies.filter(movie => 
      movie.genre === selectedMovie.genre && movie.id !== selectedMovie.id
    );

    return (
      <>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <hr />
        <h2>Similar Movies</h2>
        {similarMovies.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onMovieClick={newSelectedMovie => setSelectedMovie(newSelectedMovie)}
          />
        ))}
      </>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }

  return (
    <div className="movie-title-container">
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={newSelectedMovie => setSelectedMovie(newSelectedMovie)}
          />
        ))}
      </div>
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
        Logout
      </button>
    </div>
  );
};