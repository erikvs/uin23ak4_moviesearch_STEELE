import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
        {/* TODO: Change alternate image to placeholder image and add more display data (title, published year, genre, director, actors, price?)*/ }
      <img src={movie.Poster} alt={movie.Title} /> 
      <div>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;