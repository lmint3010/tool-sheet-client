import { SEARCHING_CONTENT } from '../types'

/** @param {boolean} status status searching for Redux State */
export const setSearchStatus = status => ({
  type: SEARCHING_CONTENT,
  payload: status,
})
