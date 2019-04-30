import axios from 'axios'

// Action creator
import {
  setLoadingSpreadsheet,
  setFetchingSpreadsheet,
} from './creators/spreadsheet'
import { setGoogleVerifyUri } from './creators/setGoogleVerifyUri'
import { setErrors, clearErrors } from './creators/errors'

// APIs Link
import api from '../api'

export const getAllSpreadsheet = async () => {
  const {
    data: { data: listSpreadsheet },
  } = await axios.get(api.spreadsheet.listall)
  return listSpreadsheet
}

export const addNewSpreadsheetDispatch = requestBody => dispatch => {
  dispatch(clearErrors())
  dispatch(setLoadingSpreadsheet(true))
  axios
    .post(api.spreadsheet.add, requestBody)
    .then(() => {
      dispatch(clearErrors())
      dispatch(setLoadingSpreadsheet(false))
    })
    .catch(err => {
      if (err.response.data.verifyUri) {
        return dispatch(setGoogleVerifyUri(err.response.data.verifyUri, false))
      }
      dispatch(setLoadingSpreadsheet(false))
      dispatch(setErrors(err))
    })
}

export const deleteSpreadsheetDispatch = requestBody => dispatch => {
  dispatch(clearErrors())
  dispatch(setLoadingSpreadsheet(true))
  axios
    .post(api.spreadsheet.delete, requestBody)
    .then(() => {
      dispatch(setLoadingSpreadsheet(false))
    })
    .catch(err => {
      dispatch(setLoadingSpreadsheet(false))
      dispatch(setErrors(err))
    })
}

export const likeSpreadsheetDispatch = requestBody => dispatch => {
  dispatch(clearErrors())
  dispatch(setLoadingSpreadsheet(true))
  axios
    .post(api.spreadsheet.like, requestBody)
    .then(() => {
      dispatch(setLoadingSpreadsheet(false))
    })
    .catch(err => {
      dispatch(setLoadingSpreadsheet(false))
      console.log(err)
    })
}

export const fetchSpreadsheetDispatch = requestBody => dispatch => {
  dispatch(clearErrors())
  dispatch(setFetchingSpreadsheet(true, requestBody.spreadsheetId))
  axios
    .post(api.spreadsheet.fetch, requestBody)
    .then(() => {
      dispatch(setFetchingSpreadsheet(false, ''))
    })
    .catch(err => {
      if (err.response.data.verifyUri) {
        dispatch(setFetchingSpreadsheet(false, ''))
        return dispatch(setGoogleVerifyUri(err.response.data.verifyUri, false))
      }
      dispatch(setFetchingSpreadsheet(false, ''))
      console.log('Fail to fetch', err)
    })
}

// Use in React hooks
/** Fetch all translations data from database
 * @param {Object} requestBody <listSite> - Array of sites - Convert to String
 */
export const fetchWorkspaceData = async requestBody => {
  try {
    const data = axios.post(api.spreadsheet.workspaceData, requestBody)
    return data
  } catch (err) {
    console.log('Fail to get workspace data:', err)
  }
}
