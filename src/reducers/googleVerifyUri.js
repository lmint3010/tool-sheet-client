import { SET_GOOGLE_VERIFY_URI } from '../actions/types'

const initialState = {
  url: '',
  verified: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_GOOGLE_VERIFY_URI:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
