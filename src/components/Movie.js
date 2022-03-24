import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = (props) => {
  const { addMovieToLike, like, removeMovieFromLike } =
    useContext(GlobalContext);

  let storedMovie = like.find((movie) => movie.id === props.id);

  const likeDisabled = storedMovie ? true : false;

  const unlikeHandler = () => {
    const movieFound = like.find((movie) => movie.id === props.id);
    if (!!movieFound) {
      removeMovieFromLike(movieFound);
    }
  };

  return (
    <div className="movie">
      <img src={IMG_API + props.poster_path} alt={props.title} />
      <div className="movie-info">
        <h3>{props.title}</h3>
      </div>
      <div className="controls">
        <button
          className="btn"
          disabled={likeDisabled}
          onClick={() =>
            addMovieToLike({
              id: props.id,
              title: props.title,
              poster_path: props.poster_path,
            })
          }
        >
          like
        </button>

        <button
          className="unlike-btn"
          disabled={!likeDisabled}
          onClick={unlikeHandler}
        >
          Unlike
        </button>
      </div>
    </div>
  );
};

export default Movie;
