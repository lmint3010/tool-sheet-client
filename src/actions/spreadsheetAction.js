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
    .then(res => {
      dispatch(setLoadingSpreadsheet(false))
    })
    .catch(err => {
      dispatch(setLoadingSpreadsheet(false))
      dispatch(setErrors(err))
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
        return dispatch(setGoogleVerifyUri(err.response.data.verifyUri, false))
      }
      dispatch(setFetchingSpreadsheet(false, ''))
      console.log('Fail to fetch', err)
    })
}
