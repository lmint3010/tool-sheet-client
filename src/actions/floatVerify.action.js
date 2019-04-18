import { SET_VERIFY_STATUS } from './types'

// Action Creator
export const waiting_verify_creator = status => ({
  type: SET_VERIFY_STATUS,
  payload: status,
})

export const waitingVerifyDispatch = status => dispatch => {
  dispatch(waiting_verify_creator(status))
}
