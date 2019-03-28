import { SET_GOOGLE_VERIFY_URI } from '../types'

/**
* @param {String} url Verify url
* @param {boolean} verified Verify url
*/
export const setGoogleVerifyUri = (url, verified) => ({
  type: SET_GOOGLE_VERIFY_URI,
  payload: { url, verified }
})