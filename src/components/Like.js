import React, { useContext } from "react";
import Movie from "./Movie";
import { GlobalContext } from "../context/GlobalState";

export const Like = () => {
  const { like } = useContext(GlobalContext);
  return (
    <div className="movie-container">
      {!!like.length &&
        like.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
    </div>
  );
};
