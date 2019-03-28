// Action Creator
import { setSearchStatus } from './creators/search'

export const searchDispatch = requestBody => dispatch => {
  dispatch(setSearchStatus(true))
  setTimeout(() => dispatch(setSearchStatus(false)), 5000)
}
