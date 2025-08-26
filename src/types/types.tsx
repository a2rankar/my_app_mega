export interface User {
  id: number
  username: string
  image: string | null
  login: string
  birth_date: string | null
  email: string
  role: string
  phone_number: string
  level: string
  chat_id: string
}
export type AuthResponse = {
  access_token: string
  refresh_token: string
  user: User
}
export interface GeneralInfoProps {
  data: {
    name: string
    email: string
    phone: string
    joined: string
  }
}

export interface TourHistoryProps {
  data: {
    id: number
    title: string
    date: string
    status: string
  }[]
}

export interface StatisticsProps {
  data: {
    email:string,
    nubmer: string,
    date_of_registration: string
  }
}
export interface UserMock {
  id: number
  username: string
  image: string | null
  login: string
  birth_date?: string | null
  email?: string | null
  phone_number?: string
  status?: string
  last_time?: string
  childs?: number
  location?: string
}
