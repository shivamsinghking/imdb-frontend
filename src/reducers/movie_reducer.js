import {
  IS_LOADING,
  SET_MOVIE_LIST
 } from '../actions/movies'
 
 const defaultState = {
  isLoading: false,
  movies: [],
  total: 0,
  limit: 0,
  page: 0
 }
 
 const Movie = (state = defaultState, action) => {
   switch (action.type) {
     case IS_LOADING:{
       return {...state, isLoading: action.isLoading}
     }

     case SET_MOVIE_LIST: {
      return {...state, movies: [...action.movies]}
     }

     default:
       return state
   }
 }
 
 export default Movie
 