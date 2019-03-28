import { SET_CURRENT_USER } from '../types'

export const setCurrentUser = decodedUser => ({
  type: SET_CURRENT_USER,
  payload: decodedUser
})