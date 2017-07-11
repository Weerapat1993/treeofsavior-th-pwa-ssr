import { 
  FETCH_BUILD,
  CREATE_BUILD,
} from './buildActionTypes'
import { 
  API_ENDPOINT_FETCH_BUILD, 
  API_ENDPOINT_CREATE_BUILD 
} from '../../../config/endpoints'

export const fetchBuildRequest = () => ({ type: FETCH_BUILD.REQUEST })
export const fetchBuildSuccess = (payload) => ({ type: FETCH_BUILD.SUCCESS, payload })
export const fetchBuildFailure = (error) => ({ type: FETCH_BUILD.FAILURE, error: error.message })

export const fetchBuild = () => (dispatch, getState) => {
  dispatch(fetchBuildRequest())
  return fetch(API_ENDPOINT_FETCH_BUILD)
    .then(res => res.json())
    .then(res => dispatch(fetchBuildSuccess(res.data)))
    .catch(error => dispatch(fetchBuildFailure(error)))
}

export const createBuildRequest = () => ({ type: CREATE_BUILD.REQUEST })
export const createBuildSuccess = (payload) => ({ type: CREATE_BUILD.SUCCESS, payload })
export const createBuildFailure = (error) => ({ type: CREATE_BUILD.FAILURE, error: error.message })

export const createBuild = () => (dispatch, getState) => {
  dispatch(createBuildRequest())
  return fetch(API_ENDPOINT_CREATE_BUILD)
    .then(res => res.json())
    .then(res => dispatch(createBuildSuccess(res.data)))
    .catch(error => dispatch(createBuildFailure(error)))
}

