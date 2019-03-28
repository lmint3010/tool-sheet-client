import { REGISTER_DONE } from './types'
import jwtDecode from 'jwt-decode'
import api from '../api'
import axios from 'axios'

// Utils
import { setDefaultToken } from '../utils/axios'

// Action Creators
import { setErrors, clearErrors } from './creators/errors'
import { setCurrentUser } from './creators/setCurrentUser'

// Create new account - Dispatch
export const RegisterDispatch = (userData, history) => dispatch => {
  dispatch(clearErrors())
  axios
    .post(api.users.signup, userData)
    .then(response => {
      dispatch(clearErrors())
      dispatch({
        type: REGISTER_DONE,
        payload: response.data,
      })
      history.push('/')
    })
    .catch(err => dispatch(setErrors(err)))
}

// Login - Dispatch
export const LoginDispatch = (userData, history) => dispatch => {
  dispatch(clearErrors())
  axios
    .post(api.users.signin, userData)
    .then(response => {
      dispatch(clearErrors())
      const { token } = response.data
      localStorage.setItem('data_entry_tool_jwt', token)
      const decoded = jwtDecode(token)

      // Set token to default option of Axios
      setDefaultToken(token)
      dispatch(setCurrentUser(decoded))
      history.push('/dashboard')
    })
    .catch(err => dispatch(setErrors(err)))
}

// Logout - Dispatch
export const LogoutDispatch = history => dispatch => {
  // Clear token in localStorage && axios default config
  localStorage.removeItem('data_entry_tool_jwt')
  setDefaultToken(false)

  // Dispatch to redux store
  dispatch(setCurrentUser({}))

  if (history) history.push('/')
}
