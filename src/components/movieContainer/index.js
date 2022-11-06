import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesList } from "../../actions/movies";
import MovieCard from './movieCard'
import './index.css'

const MovieContainer = () => {
  const movieList = useSelector(state  => state.movies).movies
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getMoviesList())
     /* eslint-disable */
  },[])
    /* eslint-enable*/

    return (
    <>
      <Link to="/movies/create"><div className="create-movie-btn">+ Add New Movie</div></Link>
      <div className="movie-container">
        {movieList && movieList.length && movieList.map((data, key) => {
          return <MovieCard {...data} key={key} />
        })}
      </div>

    </>
  )
}

export default MovieContainer