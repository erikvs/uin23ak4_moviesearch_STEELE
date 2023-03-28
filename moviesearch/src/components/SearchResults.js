import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const SearchResults = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=16d6a6e&s=${searchTerm}&type=movie`
      );
        const movies = await Promise.all(response.data.Search.map(async (movie) => {
            const movieResponse = await axios.get(
                `http://www.omdbapi.com/?apikey=16d6a6e&i=${movie.imdbID}&type=movie`
            );
            return movieResponse.data;
            })
        );

      setMovies(movies);
    };
    if (searchTerm.length >= 3) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [searchTerm]);

  if (!movies) {
    return <section>No movies found.</section>;
  }

  return (
    <div className="container">
      <h1>Search Results for "{searchTerm}"</h1>
      {movies.length > 0 ? (
        <section className="row">
          {movies.map((movie) => (
            <div className="col-md-4  border" key={movie.imdbID}>
            <MovieCard movie={movie} />
            </div>
          ))}
        </section>
      ) : 
        null}
    </div>
  );
};

export default SearchResults;