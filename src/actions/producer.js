import { createProducerApi, getProducerListApi } from '../apis/producer'

export const IS_LOADING = 'IS_LOADING'
export const SET_PRODUCER_LIST = 'SET_PRODUCER_LIST'
export const ADD_NEW_PRODUCER = 'ADD_NEW_PRODUCER'

const setProducerList = (producers) => ({
  type: SET_PRODUCER_LIST,
  producers
})

export const getProducerList = (query) => async (dispatch) => {
  try {
    const response = await getProducerListApi(query);
    if (response && response.data) {
      dispatch(setProducerList({...response.data}))
    }
  } catch (error) {
    console.log("error --> ", error)
  }
}

/**
 * @param {*} body 
 * @returns 
 */
export const createProducer = (body) => async (dispatch) => {
  try {
    // dispatch(setLoading(true))
    const response = await createProducerApi(body);
    // dispatch(setLoading(false))
    if (response && response.data) {
      // toast.success('SUCCESS!! Your Post is published')
      console.log('Producer-response', response)
      return true;
    } else {
      console.log(response)
      return false;
    }
  } catch (error) {
    // dispatch(setLoading(false))
    // toast.error('Something went Wrong! Please Try Again...')
    console.log(error)
    return false;
  }
}