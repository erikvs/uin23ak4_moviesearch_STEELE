import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
        {/* TODO: Change alternate image to placeholder image and add more display data (title, published year, genre, director, actors, price?)*/ }
      <img src={movie.Poster} alt={movie.Title} /> 
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