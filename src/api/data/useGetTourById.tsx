import { useEffect, useState } from 'react'
import axios from 'axios'
import { TourApiInterface } from './cardData'

export const useTourById = (id: string | undefined) => {
  const [tour, setTour] = useState<TourApiInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `http://35.225.244.52:8000/api/tour/${id}/`,
        )

        const tourData = response.data

        const formatted: TourApiInterface = {
          id: tourData.id,
          image: tourData.image,
          title: tourData.title,
          average_rating: tourData.rating ?? null,
          duration: `${tourData.duration_days}`,
          price: tourData.price,
          date: new Date(tourData.start_date).toLocaleDateString(),
          place: tourData.collection_point,
          level: tourData.level,
          collection_point: tourData.collection_point,
        }

        setTour(formatted)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTour()
  }, [id])

  return { tour, loading, error }
}
