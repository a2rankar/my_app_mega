import axios from 'axios'

const BASE_URL = 'http://35.225.244.52:8000'

let accessToken: string | null = null
export const setAccessToken = (token: string | null) => {
  accessToken = token
}

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// опционально: обработка 401 с авто-refresh
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const { data } = await axios.post(
          `${BASE_URL}/refresh/`,
          {},
          { withCredentials: true },
        )
        setAccessToken(data.accessToken)
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
        return api(originalRequest)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return Promise.reject(err)
  },
)
