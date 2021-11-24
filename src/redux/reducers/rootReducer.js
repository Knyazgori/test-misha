import { combineReducers } from 'redux'
import { listReducer } from './listReducer'
import { statusReducer } from './statusReducer'
import { searchReducer } from './searchReducer'
import { switchReducer } from './switchReducer'



export const rootReducer = combineReducers({
  listReducer,
  statusReducer,
  searchReducer,
  switchReducer,
})
