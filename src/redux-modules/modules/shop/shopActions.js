import { FETCH_SHOP } from './shopActionTypes'
import { API_ENDPOINT_FETCH_SHOP } from '../../../config/endpoints'

export const fetchShopRequest = () => ({
  type: FETCH_SHOP.REQUEST
})

export const fetchShopSuccess = (payload) => ({
  type: FETCH_SHOP.SUCCESS,
  payload
})

export const fetchShopFailure = (error) => ({
  type: FETCH_SHOP.FAILURE,
  error: error.message
})

export const fetchShop = () => (dispatch, getState) => {
  dispatch(fetchShopRequest())
  return fetch(API_ENDPOINT_FETCH_SHOP)
    .then(res => res.json())
    .then(res => dispatch(fetchShopSuccess(res.data)))
    .catch(error => dispatch(fetchShopSuccess(error)))
}