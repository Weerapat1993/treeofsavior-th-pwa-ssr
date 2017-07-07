import { combineReducers } from 'redux'
import { shopReducer } from './modules/shop'

export default combineReducers({
  shop: shopReducer
})
