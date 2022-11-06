import {
  IS_LOADING,
  SET_ACTORLIST,
  ADD_NEW_ACTOR
 } from '../actions/actor'
 
 const defaultState = {
  isLoading: false,
  actors: [{value: 'abc', label: 'ABC'}]
 }
 
 const Actor = (state = defaultState, action) => {
   switch (action.type) {
     case IS_LOADING:{
       return {...state, isLoading: action.isLoading}
     }

     case SET_ACTORLIST: {
      return {...state, actors: [...action.actors.actors]}
     }

     case ADD_NEW_ACTOR:{
      let actors = state.actors
      actors.push(action.actor);
      return {...state, actors: [...actors]}
     }
     default:
       return state
   }
 }
 
 export default Actor
 