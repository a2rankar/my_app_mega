import axios from 'axios'
import { User } from '../../types/types'

const BASE_URL = 'http://35.225.244.52:8000'

export const getUserById = async (id: number): Promise<User> => {
  try {
    const res = await axios.get(`${BASE_URL}/api/user/${id}/`, {
      timeout: 10000,
    })

    localStorage.setItem('userId', res.data.id)
    return res.data
  } catch (error) {
    console.error('Ошибка при получении профиля:', error)
    throw error
  }
}
export const getUserByEmail = async (
  email: string,
  token: string,
): Promise<User> => {
  try {
    const res = await axios.post(
      `${BASE_URL}/register-with-email/`,
      { email },
      {
        withCredentials: true,
      },
    )

    return res.data
  } catch (error) {
    console.error('Ошибка при получении профиля:', error)
    throw error
  }
}

export const sendDataRegistration = async (data: {
  login: string
  email: string
  password: string
}) => {
  try {
    const res = await axios.post(`${BASE_URL}/register-with-email/`, data, {
      withCredentials: true,
    })
    return res.data
  } catch (err: any) {
    console.error('Ошибка регистрации:', err.response?.data || err.message)
    throw err
  }
}

export const sendPhoneNumber = async (phone: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth-with-tg/`,
      { phone_number: phone },
      { withCredentials: true },
    )
    return res.data
  } catch (err: any) {
    console.error(
      'Ошибка при отправке номера:',
      err.response?.data || err.message,
    )
    throw err
  }
}

export const verifyOTP = async (phone: string, otp: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/otp-verify/`,
      {
        phone_number: phone,
        code: otp,
      },
      { withCredentials: true },
    )
    return res.data
  } catch (err: any) {
    console.error(
      'Ошибка при проверке кода:',
      err.response?.data || err.message,
    )
    throw err
  }
}
