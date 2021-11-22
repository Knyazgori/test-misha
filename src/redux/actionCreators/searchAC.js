import { CHANGE_SEARCH } from "../actionTypes/searchAT.js"

export const changeSearchAC = (payload) => {
  return {
    type: CHANGE_SEARCH, 
    payload
  }
}
