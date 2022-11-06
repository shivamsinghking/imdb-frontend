import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/root_reducers'
import thunk from 'redux-thunk'

const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const configureStore = (preloadedState = {}) => createStore(rootReducer, preloadedState, composedEnhancers)

export default configureStore
