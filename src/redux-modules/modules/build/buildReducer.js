import { FETCH_BUILD, CREATE_BUILD } from './buildActionTypes'
import { 
  reducerFetchBuildRequest, reducerFetchBuildSuccess, reducerFetchBuildFailure,
  reducerCreateBuildRequest, reducerCreateBuildSuccess, reducerCreateBuildFailure,
} from './buildFunction'

export const initalState = {
  data: [],
  isFetching: false,
  error: false
}

export const buildReducer = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_BUILD.REQUEST:
      return reducerFetchBuildRequest(state, action)
    case FETCH_BUILD.SUCCESS:
      return reducerFetchBuildSuccess(state, action)
    case FETCH_BUILD.FAILURE:
      return reducerFetchBuildFailure(state, action)
    case CREATE_BUILD.REQUEST:
      return reducerCreateBuildRequest(state, action)
    case CREATE_BUILD.SUCCESS:
      return reducerCreateBuildSuccess(state, action)
    case CREATE_BUILD.FAILURE:
      return reducerCreateBuildFailure(state, action)
    default: 
      return state
  }
}