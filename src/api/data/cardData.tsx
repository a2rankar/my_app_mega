import { useEffect, useState } from 'react'
import axios from 'axios'

export interface TourApiInterface {
  id: number
  image: string
  title: string
  average_rating: number | null
  description: string
  duration: string
  price: number
  collection_point: string
  start_date: string
  level: string
  departures: any[]
  author: string
  place: number | string
}

export const useCardData = (): TourApiInterface[] => {
  const [tours, setTours] = useState<TourApiInterface[]>([])

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://35.225.244.52:8000/tour/')
        const data = response.data

        const toursArray = Array.isArray(data) ? data : data.results || []

        const formatted: TourApiInterface[] = toursArray.map(
          (tour: any, index: number) => ({
            id: tour.id,
            image: tour.image,
            title: tour.title,
            average_rating: tour.rating ?? null,
            description: tour.description,
            duration: `${tour.duration_days}`,
            price: tour.price,
            collection_point: tour.collection_point,
            start_date: tour.start_date,
            level: tour.level,
            departures: tour.departures,
            author: tour.author,
            place: tour.place,
          }),
        )

        setTours(formatted)
      } catch (error) {
        console.error('Error fetching tour data:', error)
      }
    }

    fetchTours()
  }, [])

  return tours
}
