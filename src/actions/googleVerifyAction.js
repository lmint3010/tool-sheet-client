import axios from 'axios'

import { setErrors, clearErrors } from './creators/errors'
import { setGoogleVerifyUri } from './creators/setGoogleVerifyUri'
import { waiting_verify_creator } from './floatVerify.action'
// API Urls
import api from '../api'

/** @param {object} requestBody Body you want to post to setToken with axios */
export const googleVerifyDispatch = requestBody => dispatch => {
  dispatch(clearErrors())
  axios
    .post(api.google.setToken, requestBody)
    .then(res => {
      dispatch(clearErrors())
      dispatch(setGoogleVerifyUri('', res.data.success))
      dispatch(waiting_verify_creator(false))
    })
    .catch(err => dispatch(setErrors(err)))
}
