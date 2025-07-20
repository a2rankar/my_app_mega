import axios from 'axios'
import { User } from '../../types/types'

export const getUserById = async (id: number): Promise<User> => {
  try {
    const res = await axios.get(`http://35.225.244.52:8000/api/user/${id}/`)
    localStorage.setItem('userId', res.data.id)
    return res.data
  } catch (error) {
    console.error('error while profile fetching: ', error)
    throw error
  }
}
