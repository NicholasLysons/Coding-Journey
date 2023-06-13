import React, { createContext, useContext } from "react";
import { useMovieReducer } from './reducers';

const MovieGuruContext = createContext();
const { Provider } = MovieGuruContext;

const MovieGuruProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useMovieReducer({
      likedMovies: [],  
      dislikedMovies: [],  
      movies: [],  
      currentUser: ''  
    });
    
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useMovieGuruContext = () => {
    return useContext(MovieGuruContext);
};

export { MovieGuruProvider, useMovieGuruContext };
