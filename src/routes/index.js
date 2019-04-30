import React from 'react'
import { Redirect } from 'react-router-dom'

/** Protected for route
 * @param {boolean} auth status
 * @param {any} isAuth The link or the component you want to return if user authenticated
 * @param {any} notAuth The link or the component you want to return if user UNauthenticated
 */
export const protectedRoute = (auth, isAuth, notAuth) => {
  if (auth) {
    if (typeof isAuth === 'string') {
      return <Redirect to={isAuth} />
    }
    return isAuth
  } else {
    if (typeof notAuth === 'string') {
      return <Redirect to={notAuth} />
    }
    return notAuth
  }
}


