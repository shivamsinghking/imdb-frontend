import { SERVER_URL } from "../constant"
import { axiosRequest, createQueryParams} from "../common/helper"

/**
 * @param {*} query 
 * @returns 
 */
export const getProducerListApi = async(query) => {
  let reqUrl = `${SERVER_URL}api/producers`
  if (!!query && Object.keys(query).length > 0) {
    reqUrl = reqUrl + '?' + createQueryParams(query)
  }
 return await axiosRequest('GET', reqUrl);
}

/** 
 * @param {*} obj 
 * @returns 
 */
 export const createProducerApi = async(obj) =>{
  let reqUrl = `${SERVER_URL}api/producers`
  return await axiosRequest('POST', reqUrl, obj)
}

