import { combineReducers } from 'redux'

// Reducers
import userAuth from './userAuth'
import errorsReducer from './errors'
import googleVerifyUriReducer from './googleVerifyUri'
import spreadsheet from './spreadsheet'
import searchContent from './search'

export default combineReducers({
  errors: errorsReducer,
  auth: userAuth,
  google_verify: googleVerifyUriReducer,
  spreadsheet: spreadsheet,
  searching: searchContent,
})
