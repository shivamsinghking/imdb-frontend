import { SERVER_URL } from "../constant"
import { axiosRequest, createQueryParams} from "../common/helper"

/**
 * @param {*} query 
 * @returns 
 */
export const getActorsListApi = async(query) => {
  let reqUrl = `${SERVER_URL}api/actors`
  if (!!query && Object.keys(query).length > 0) {
    reqUrl = reqUrl + '?' + createQueryParams(query)
  }
 return await axiosRequest('GET', reqUrl);
}

/** 
 * @param {*} obj 
 * @returns 
 */
 export const createActorApi = async(obj) =>{
  let reqUrl = `${SERVER_URL}api/actors`
  return await axiosRequest('POST', reqUrl, obj)
}

