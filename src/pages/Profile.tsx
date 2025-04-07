import React from "react";
import { useState, useEffect } from 'react'

type UserProfile = {
  name: string
  email: string
  age?: number 
}

function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
   
    const fetchUser = async () => {
    
      const mockUser: UserProfile = {
        name: 'Айбек Беков',
        email: 'aibek@example.com',
        age: 28
      }

      setUser(mockUser)
    }

    fetchUser()
  }, [])

  if (!user) {
    return <p>Загрузка профиля...</p>
  }

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {user.age && <p><strong>Возраст:</strong> {user.age}</p>}
    </div>
  )
}

export default Profile;
