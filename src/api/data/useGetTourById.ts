// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { TourApiInterface } from './cardData'

// export const useTourById = (id: string | undefined) => {
//   const [tour, setTour] = useState<TourApiInterface | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     if (!id) return

//     const fetchTour = async () => {
//       try {
//         const response = await axios.get(
//           `http://35.225.244.52:8000/api/tour/${id}/`,
//         )

//         const tourData = response.data

//         const formatted: TourApiInterface = {
//           id: tourData.id,
//           image: tourData.image,
//           title: tourData.title,
//           average_rating: tourData.rating ?? null,
//           duration: `${tourData.duration_days}`,
//           price: tourData.price,
//           collection_point: tourData.collection_point,
//           start_date: tourData.start_date,
//           level: tourData.level,
//           description: tourData.description,
//           departures: tourData.departures,
//           author: tourData.author,
//           place: tourData.place,
//         }

//         setTour(formatted)
//       } catch (err: any) {
//         setError(err.message || 'Ошибка при загрузке данных')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchTour()
//   }, [id])

//   return { tour, loading, error }
// }
import { useEffect, useState } from 'react'
import { TourApiInterface } from './cardData'
import { useCardData } from './cardData'

export const useTourById = (id?: string) => {
  const [tour, setTour] = useState<TourApiInterface | null>(null)
  const [isloading, setIsloading] = useState(true)

  const tours = useCardData()

  useEffect(() => {
    if (!id) return
    setIsloading(true)
    const found = tours.find((t) => t.id === Number(id)) || null
    setTour(found)
    setIsloading(false)
  }, [id, tours])

  return { tour, isloading }
}
