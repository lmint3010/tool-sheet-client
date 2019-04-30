import { combineReducers } from 'redux'

// Reducers
import userAuth from './userAuth'
import errorsReducer from './errors'
import googleVerifyUriReducer from './googleVerifyUri'
import spreadsheet from './spreadsheet'
import searchContent from './search'
import waiting_verify from './floatVeirfy'
import resetPassword from './resetPassword'

export default combineReducers({
  errors: errorsReducer,
  auth: userAuth,
  google_verify: googleVerifyUriReducer,
  spreadsheet: spreadsheet,
  searching: searchContent,
  waiting_verify,
  resetPasswordSend: resetPassword,
})
