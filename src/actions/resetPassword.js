import {
  RESET_PASSWORD_SEND,
  RESET_PASSWORD_VALID_TOKEN,
  RESET_PASSWORD_RENEW_LOADING,
  RESET_PASSWORD_RENEWED,
  SET_ERRORS,
} from './types'
import Axios from 'axios'
import api from '../api'

export const renewPasswordDispatch = requestBody => dispatch => {
  dispatch({
    type: RESET_PASSWORD_RENEW_LOADING,
    payload: true,
  })
  Axios.post(api.users.renewPassword, requestBody).then(
    ({ data: { renew } }) => {
      dispatch({
        type: RESET_PASSWORD_RENEW_LOADING,
        payload: false,
      })
      dispatch({
        type: RESET_PASSWORD_RENEWED,
        payload: renew,
      })
    }
  )
}

export const resetPasswordValidTokenDispatch = requestBody => dispatch => {
  Axios.post(api.users.validToken, requestBody).then(({ data: { valid } }) => {
    if (valid) {
      return dispatch({
        type: RESET_PASSWORD_VALID_TOKEN,
        payload: true,
      })
    }
    dispatch({
      type: RESET_PASSWORD_VALID_TOKEN,
      payload: false,
    })
  })
}

export const resetPasswordDispatch = requestBody => dispatch => {
  dispatch({ type: SET_ERRORS, payload: {} })
  dispatch({
    type: RESET_PASSWORD_SEND,
    payload: {
      send: false,
      waiting: true,
    },
  })

  Axios.post(api.users.resetPassword, requestBody).then(
    ({ data: { success, errors } }) => {
      if (!success) {
        dispatch({
          type: RESET_PASSWORD_SEND,
          payload: { send: false, waiting: false },
        })
        if (errors.emailNotFound)
          return dispatch({
            type: SET_ERRORS,
            payload: `Email not found!`,
          })
        return dispatch({
          type: SET_ERRORS,
          payload: 'System has been broken',
        })
      }

      dispatch({
        type: SET_ERRORS,
        payload: {},
      })

      dispatch({
        type: RESET_PASSWORD_SEND,
        payload: { send: true, waiting: false },
      })
    }
  )
}
