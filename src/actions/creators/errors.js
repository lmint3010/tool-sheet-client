import { SET_ERRORS } from '../types'

export const setErrors = ({ response: { data }}) => ({
  type: SET_ERRORS,
  payload: data.errors
})

export const clearErrors = () => ({
  type: SET_ERRORS,
  payload: {}
})