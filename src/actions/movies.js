import { toast } from 'react-toastify'
import { createMovieApi, getMovieListApi } from '../apis/movies'

export const IS_LOADING = 'IS_LOADING'
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST'

const setLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading
})

const setMovieList = (movies) => ({
  type: SET_MOVIE_LIST,
  movies: movies.movies
})

export const getMoviesList = (query) => async (dispatch) => {
  try {
    const response = await getMovieListApi(query);
    if (response && response.data) {
      dispatch(setMovieList(response.data))
    }
  } catch (error) {
    toast.error('Something went Wrong! Please Try Again...')
    console.log("error --> ", error)
  }
}

/**
 * @param {*} body 
 * @returns 
 */
export const addNewMovie = (body) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await createMovieApi(body);
    dispatch(setLoading(false))
    if (response && response.data) {
      toast.success('SUCCESS!! New Movie Added...')
      return true;
    } else {
      if(response.data && response.data.errMsg){
        toast.error(response.data.errMsg)
      }
      console.log(response)
      return false;
    }
  } catch (error) {
    dispatch(setLoading(false))
    if(error.response && error.response.data && error.response.data.errMsg){
      toast.error(error.response.data.errMsg)
    }else{
      toast.error(`Something went Wrong! Please Try Again...`)
    }
    console.log(error)
    return false;
  }
}