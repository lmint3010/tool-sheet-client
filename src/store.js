import { createStore, applyMiddleware } from 'redux' // --- Production ---

// import { createStore, applyMiddleware, compose } from 'redux' // --- Develop ---

import thunk from 'redux-thunk'
// Final Reducer
import rootReducer from './reducers/index'

const initialState = {}
const middlewares = [thunk]

export default createStore(
  rootReducer,
  initialState,
  // compose(
  applyMiddleware(...middlewares)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
)
