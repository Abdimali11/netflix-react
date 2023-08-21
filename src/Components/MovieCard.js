import React from "react";
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movie.show.image.medium} alt="movie" />
      </div>
      <h3 className="movie-heading">{movie.show.name}</h3>
      <p>⭐ {movie.show.rating.average || 0}</p>
      <div className="list"> 
        {movie.show.genres.join(" | ")}
      </div>
      <button>
        <a href={movie.show.officialSite}  className="website-button">
          Website
        </a>
      </button>
    </div>
  );
}

export default MovieCard;