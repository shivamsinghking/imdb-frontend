import { axiosRequest, createQueryParams} from "../common/helper"
import { SERVER_URL } from "../constant"

/**
 * @param {*} query 
 * @returns 
 */
 export const getMovieListApi = async(query) => {
  let reqUrl = `${SERVER_URL}api/movies`
  if (!!query && Object.keys(query).length > 0) {
    reqUrl = reqUrl + '?' + createQueryParams(query)
  }
 return await axiosRequest('GET', reqUrl);
}

/** 
 * @param {*} obj 
 * @returns 
 */
 export const createMovieApi = async(obj) =>{
  let reqUrl = `${SERVER_URL}api/movies`
  return await axiosRequest('POST', reqUrl, obj)
}
