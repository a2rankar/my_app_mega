import React from 'react'

interface TourHistoryProps {
  userId: number
}

const TourHistory: React.FC<TourHistoryProps> = ({ userId }) => {
  return (
    <div>
      <h2>История туров пользователя #{userId}</h2>{' '}
    </div>
  )
}

export default TourHistory
