import {
  RESET_PASSWORD_SEND,
  RESET_PASSWORD_VALID_TOKEN,
  RESET_PASSWORD_RENEW_LOADING,
  RESET_PASSWORD_RENEWED
} from '../actions/types'

const initialState = {
  send: false,
  waiting: false,
  valid: true,
  renewed: false,
  renewing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_RENEW_LOADING:
      return {
        ...state,
        renewing: action.payload
      }
    case RESET_PASSWORD_RENEWED:
      return {
        ...state,
        renewed: action.payload
      }
    case RESET_PASSWORD_SEND:
      return {
        ...action.payload,
        valid: true,
      }
    case RESET_PASSWORD_VALID_TOKEN:
      return {
        ...state,
        valid: action.payload,
      }
    default:
      return state
  }
}
