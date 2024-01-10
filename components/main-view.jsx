import { useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "./movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      image:
        "https://images.moviesanywhere.com/828288e8eff24b4e7851f6404ec98b67/ed5440ea-03ce-4038-8538-10845b0c7d82.jpg",
      director: "Christopher Nolan",
      releaseYear: 2010,
    },
    {
      id: 2,
      title: "The Matrix",
      image:
        "https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg/revision/latest/scale-to-width-down/1200?cb=20210908111245",
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
    },
    {
      id: 3,
      title: "Interstellar",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
      director: "Christopher Nolan",
      releaseYear: 2014,
    },
    {
      id: 4,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
      director: "Peter Jackson",
      releaseYear: 2001,
    },
    {
      id: 5,
      title: "Forrest Gump",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
      director: "Robert Zemeckis",
      releaseYear: 1994,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div className="movie-title-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
    </div>
  );
};
