
export const reducerFetchShopRequest = (state, action) => ({
  ...state,
  error: false,
  isFetching: true,
})

export const reducerFetchShopSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  error: false,
  isFetching: false,
})

export const reducerFetchShopFailure = (state, action) => ({
  ...state,
  error: action.error,
  isFetching: false,
})