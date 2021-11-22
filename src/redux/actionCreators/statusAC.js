import { CHANGE_STATUS } from "../actionTypes/statusAT.js"

export const changeStatusAC = (payload) => {
  return {
    type: CHANGE_STATUS, 
    payload
  }
}
