import { CHANGE_SEARCH } from "../actionTypes/searchAT.js";

const initialState = { searchWord: '' }

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, searchWord: action.payload }
    default:
      return state
  }
}
