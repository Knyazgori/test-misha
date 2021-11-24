import { CHANGE_SWITCH } from "../actionTypes/switchAT.js"

export const changeSwitchAC = (payload) => {
  return {
    type: CHANGE_SWITCH, 
    payload
  }
}
