import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }, []);
  return (
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
    </div>
  );
};
