import { FETCH_SHOP } from './shopActionTypes'
import { reducerFetchShopRequest, reducerFetchShopSuccess, reducerFetchShopFailure } from './shopFunction'

export const initalState = {
  data: [],
  isFetching: false,
  error: false
}

export const shopReducer = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_SHOP.REQUEST:
      return reducerFetchShopRequest(state, action)
    case FETCH_SHOP.SUCCESS:
      return reducerFetchShopSuccess(state, action)
    case FETCH_SHOP.FAILURE:
      return reducerFetchShopFailure(state, action)
    default: 
      return state
  }
}