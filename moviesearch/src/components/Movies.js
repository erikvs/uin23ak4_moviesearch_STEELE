import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "http://www.omdbapi.com/?apikey=16d6a6e&s=James%20Bond&type=movie&page=1"
      );
      setMovies(response.data.Search);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>James Bond Movies</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;