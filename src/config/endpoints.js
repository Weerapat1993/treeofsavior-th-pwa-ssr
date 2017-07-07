
// Endpoint
const API_BASE_URL = 'http://localhost:8000'

const api = (path) => `${API_BASE_URL}${path}`

// Path Authentication
export const PATH_AUTH_LOGIN = '/login'
export const PATH_HAS_LOGIN = '/dashboard'

export const API_ENDPOINT_FETCH_SHOP = api('/shops')