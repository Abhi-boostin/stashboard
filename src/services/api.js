import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  register: (email, password) => api.post('/register', { email, password }),
  login: (email, password) => api.post('/login', { email, password }),
  verifyOTP: (email, otp) => api.post('/verify-otp', { email, otp }),
  resendOTP: (email) => api.post('/resend-otp', { email }),
  getProfile: () => api.get('/profile'),
  changePassword: (currentPassword, newPassword) => 
    api.put('/profile/password', { currentPassword, newPassword }),
}

// Items API
export const itemsAPI = {
  getItems: () => api.get('/items'),
  addItem: (name, quantity) => api.post('/items', { name, quantity }),
  updateItem: (id, name, quantity) => api.put(`/items/${id}`, { name, quantity }),
  deleteItem: (id) => api.delete(`/items/${id}`),
}

export default api