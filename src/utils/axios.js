import axios from "axios";

export const setDefaultToken = token => {
  if(token) {
    // Apply token for every request
    axios.defaults.headers.common['Authorization'] = token
  }
  else {
    // Delete default token
    delete axios.defaults.headers.common['Authorizaion']
  }
}