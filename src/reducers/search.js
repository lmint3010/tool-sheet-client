import { SEARCHING_CONTENT, SET_SEARCH_RESULT } from '../actions/types'

const initialState = {
  status: false,
  result: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING_CONTENT:
      return {
        ...state,
        status: action.payload,
        result: []
      }
    case SET_SEARCH_RESULT:
      return {
        status: false,
        result: action.payload,
      }
    default:
      return state
  }
}
