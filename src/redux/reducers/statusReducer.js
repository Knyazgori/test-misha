import { CHANGE_STATUS } from "../actionTypes/statusAT.js";


const initialState = { status: 'По возрастанию цены' }

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { ...state, status: action.payload }
    default:
      return state
  }
}
 