import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'

type Tour = {
  id: string
  title: string
  description: string
  price: number
}

function ToursDetail() {
  const { id } = useParams<{ id: string }>()
  const [tour, setTour] = useState<Tour | null>(null)

  useEffect(() => {
    
    const fetchTour = async () => {
    
      const mockTour: Tour = {
        id: id || '',
        title: 'Поездка в горы',
        description: 'Удивительное путешествие по горам Кыргызстана',
        price: 12000
      }

      setTour(mockTour)
    }

    fetchTour()
  }, [id])

  if (!tour) {
    return <p>Загрузка...</p>
  }

  return (
    <div>
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
      <p><strong>Цена:</strong> {tour.price} сом</p>
    </div>
  )
}

export default ToursDetail
