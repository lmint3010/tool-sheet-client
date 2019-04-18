import { SET_VERIFY_STATUS } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VERIFY_STATUS:
      return action.payload
    default:
      return state
  }
}
