import { GET_LIST } from "../actionTypes/listAT.js";
import list from './list.json'

const initialState = list

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
