import { combineReducers } from 'redux'
import { buildReducer } from './modules/build'

export default combineReducers({
  build: buildReducer,
})
