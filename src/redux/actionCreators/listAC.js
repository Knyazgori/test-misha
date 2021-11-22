import { GET_LIST } from "../actionTypes/listAT.js"

export const getListAC = (payload) => {
  return {
    type: GET_LIST, 
    payload
  }
}
