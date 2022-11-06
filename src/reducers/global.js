 
 const defaultState = {
  isLoading: false
}
 
 /* HINT - here => action = {
   type: IS_PAGE_LOADING,
   isLoading: true or false
 }
 there can be many actions that you can make
 */
 const Global = (state = defaultState, action) => {
   switch (action.type) {
     case "IS_PAGE_LOADING":{
       return {...state, isLoading: action.isLoading}
     }

     default:
       return state
   }
 }
 
 export default Global
 