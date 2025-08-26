import { api } from '../axiosInstance'
import { User } from '../../types/types'
import { AuthResponse } from '../../types/types'
export const getUserById = async (id: number): Promise<User> => {
  const res = await api.get(`/api/user/${id}/`, { timeout: 10000 })
  localStorage.setItem('userId', res.data.id)
  return res.data
}

export const getUserByEmail = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const res = await api.post<AuthResponse>('user/auth-with-email/', {
    identifier: email,
    password,
  })
  return res.data
}

export const sendDataRegistration = async (data: {
  login: string
  email: string
  password: string
}) => {
  const res = await api.post('/register-with-email/', data)
  return res.data
}

export const sendPhoneNumber = async (phone: string) => {
  const res = await api.post('/auth-with-tg/', { phone_number: phone })
  return res.data
}

export const verifyOTP = async (phone: string, otp: string) => {
  const res = await api.post('/otp-verify/', {
    phone_number: phone,
    code: otp,
  })
  return res.data
}
