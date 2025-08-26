import React, { useEffect, useState } from 'react'
import Card from '../../components/Cards/Card'
import { TourApiInterface } from '../../api/data/cardData'
import { mockTours } from '../../api/data/cardData'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  const favoriteTours = mockTours.filter((tour) => favorites.includes(tour.id))

  return (
    <div>
      <h1>Избранные туры</h1>
      <Card data={favoriteTours} />
    </div>
  )
}

export default Favorites
