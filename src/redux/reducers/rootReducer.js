import { combineReducers } from 'redux'
import { listReducer } from './listReducer'
import { statusReducer } from './statusReducer'
import { searchReducer } from './searchReducer'


export const rootReducer = combineReducers({
  listReducer,
  statusReducer,
  searchReducer,
})
