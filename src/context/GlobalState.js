import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  like: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(state.like));
  }, [state]);

  // actions
  const addMovieToLike = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIKE", payload: movie });
  };

  const removeMovieFromLike = (movie) => {
    dispatch({ type: "REMOVE_MOVIE", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        like: state.like,
        addMovieToLike,
        removeMovieFromLike,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
