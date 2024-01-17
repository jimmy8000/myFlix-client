import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div className="movie-view">
        <img src={movie.image} alt={`${movie.title} cover`} />
        <div className="movie-details">
          <div className="movie-detail movie-title">{movie.title}</div>
          <div className="movie-detail movie-director">{movie.director}</div>
          <div className="movie-detail movie-release-year">{movie.releaseYear}</div>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };
  
MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}