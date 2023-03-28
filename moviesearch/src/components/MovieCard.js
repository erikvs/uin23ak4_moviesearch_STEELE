import React from "react";
import placeHolderImage from "../resources/placeHolderImage.png";

/*placeHolderImage: https://www.freepik.com/free-photos-vectors/video-placeholder*/

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <img
      src={movie.Poster} alt={movie.Title} className="card-img-top mx-auto d-block p-3 movie-poster " onError={(e) => {
          e.target.src = placeHolderImage; 
        }}/> 
      <article className="card-body" >
        <h2 className="card-title">{movie.Title}</h2>
        <p className="card-text">Released: {movie.Year}</p>
        <p className="card-text">Genre: {movie.Genre}</p>
        <p className="card-text">Director: {movie.Director}</p>
        <p className="card-text">Actors: {movie.Actors}</p>
        <p className="card-text">Awards: {movie.Awards}</p>
      </article>
    </div>
  );
};

export default MovieCard;