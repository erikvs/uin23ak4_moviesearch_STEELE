import React from "react";
import placeHolderImage from "../resources/placeHolderImage.png";

/*placeHolderImage: https://www.freepik.com/free-photos-vectors/video-placeholder*/

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
      src={movie.Poster} alt={movie.Title} onError={(e) => {
          e.target.src = placeHolderImage; 
        }}/> 
      <article>
        <h2>{movie.Title}</h2>
        <p>Released: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Awards: {movie.Awards}</p>
      </article>
    </div>
  );
};

export default MovieCard;