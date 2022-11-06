import {
  IS_LOADING,
  SET_PRODUCER_LIST 
} from '../actions/producer'
 
 const defaultState = {
  isLoading: false,
  producers: [{value: 'abc', label: 'ABC'}]
 }
 
 const Producer = (state = defaultState, action) => {
   switch (action.type) {
     case IS_LOADING:{
       return {...state, isLoading: action.isLoading}
     }

     case SET_PRODUCER_LIST: {
      return {...state, producers: [...action.producers.producers]}
     }

     default:
       return state
   }
 }
 
 export default Producer
 