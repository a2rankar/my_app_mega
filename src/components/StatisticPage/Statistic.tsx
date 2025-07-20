import React from 'react'

interface StatisticsProps {
  user: any
}

const Statistics: React.FC<StatisticsProps> = ({ user }) => {
  return (
    <div>
      <p>Level: {user.level}</p>
      <p>Chat ID: {user.chat_id}</p>
    </div>
  )
}

export default Statistics
