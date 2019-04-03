// Action Creator
import { setSearchStatus } from './creators/search'
import { SET_SEARCH_RESULT } from './types'
import Axios from 'axios'
import api from '../api'

export const searchDispatch = requestBody => dispatch => {
  dispatch(setSearchStatus(true))
  Axios.post(api.spreadsheet.search, requestBody).then(
    ({ data: { searchResults } }) => {
      dispatch({
        type: SET_SEARCH_RESULT,
        payload: searchResults,
      })
    }
  )
}
