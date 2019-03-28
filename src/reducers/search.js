import { SEARCHING_CONTENT } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING_CONTENT:
      return action.payload
    default:
      return state
  }
}
