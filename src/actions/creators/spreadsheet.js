import { LOADING_SPREADSHEET, FETCHING_SPREADSHEET } from '../types'

/** @param {boolean} status The status you want to set */
export const setLoadingSpreadsheet = status => ({
  type: LOADING_SPREADSHEET,
  payload: status,
})

/**
 * @param {boolean} status status of fetching process
 * @param {string} spreadsheetId ID of the spreadsheet working for
 */
export const setFetchingSpreadsheet = (status, spreadsheetId) => ({
  type: FETCHING_SPREADSHEET,
  payload: {
    status,
    spreadsheetId,
  },
})
