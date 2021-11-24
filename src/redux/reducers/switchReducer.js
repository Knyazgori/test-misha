import { CHANGE_SWITCH } from "../actionTypes/switchAT.js";


const initialState = { switch: '' }

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SWITCH:
      return { ...state, switch: action.payload }
    default:
      return state
  }
}
