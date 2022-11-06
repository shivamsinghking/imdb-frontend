import { createActorApi, getActorsListApi } from '../apis/actor'

export const IS_LOADING = 'IS_LOADING'
export const SET_ACTORLIST = 'SET_ACTORLIST'
export const ADD_NEW_ACTOR = 'ADD_NEW_ACTOR'

const setActorList = (actors) => ({
  type: SET_ACTORLIST,
  actors
})

export const getActorList = (query) => async (dispatch) => {
  try {
    const response = await getActorsListApi(query);
    if (response && response.data) {
      dispatch(setActorList({...response.data}))
    }
  } catch (error) {
    console.log("error --> ", error)
  }
}

/**
 * @param {*} body 
 * @returns 
 */
export const createActor = (body) => async (dispatch) => {
  try {
    // dispatch(setLoading(true))
    const response = await createActorApi(body);
    // dispatch(setLoading(false))
    if (response && response.data) {
      // toast.success('SUCCESS!! Your Post is published')
      console.log('actor-response', response)
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