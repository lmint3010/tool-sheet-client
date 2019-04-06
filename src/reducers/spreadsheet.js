import { LOADING_SPREADSHEET, FETCHING_SPREADSHEET } from '../actions/types'

const initialState = {
  loading: false,
  fetching: {
    status: false,
    spreadsheetId: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SPREADSHEET:
      return {
        ...state,
        loading: action.payload,
      }
    case FETCHING_SPREADSHEET:
      return {
        ...state,
        fetching: action.payload,
      }
    default:
      return state
  }
}
