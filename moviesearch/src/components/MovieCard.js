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
      <div>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Director}</p>
        <p>{movie.Actors}</p>
      </div>
    </div>
  );
};

export default MovieCard;