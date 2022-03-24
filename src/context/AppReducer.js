export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKE":
      return {
        ...state,
        like: [action.payload, ...state.like],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        like: state.like.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
