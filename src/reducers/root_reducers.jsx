import { combineReducers } from 'redux'
import global from './global'
import actor_reducer from './actor_reducer'
import movies_reducer from './movie_reducer'
import producer_reducer from './producer_reducer'

const rootReducer = combineReducers({global, actor: actor_reducer, movies: movies_reducer, producer: producer_reducer})

export default rootReducer
