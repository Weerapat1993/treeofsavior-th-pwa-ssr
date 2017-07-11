export const reducerFetchBuildRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true,
})

export const reducerFetchBuildSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  error: false,
  isFetching: false,
})

export const reducerFetchBuildFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false,
})



export const reducerCreateBuildRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true,
})

export const reducerCreateBuildSuccess = (state, action) => ({
  ...state,
  data: [
    ...state.data,
    ...action.payload,
  ],
  error: false,
  isFetching: false,
})

export const reducerCreateBuildFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false,
})