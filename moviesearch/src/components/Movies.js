import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const fetchMovieDetails = async (movie) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=16d6a6e&i=${movie.imdbID}&plot=full`
  );
  return response.data;
};

const fetchMovies = async () => {
  const response = await axios.get(
    "http://www.omdbapi.com/?apikey=16d6a6e&s=James%20Bond&type=movie"
  );
  const moviesWithDetails = await Promise.all(
    response.data.Search.map((movie) => fetchMovieDetails(movie))
  );
  return moviesWithDetails;
};

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesWithDetails = await fetchMovies();
      setMovies(moviesWithDetails);
    };
    getMovies();
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