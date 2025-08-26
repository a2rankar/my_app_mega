// import { useEffect, useState } from 'react'
// import axios from 'axios'

// export interface TourApiInterface {
//   id: number
//   image: string
//   title: string
//   average_rating: number | null
//   description: string
//   duration: string
//   price: number
//   collection_point: string
//   start_date: string
//   level: string
//   departures: any[]
//   author: string
//   place: number | string
// }

// export const useCardData = (): TourApiInterface[] => {
//   const [tours, setTours] = useState<TourApiInterface[]>([])

//   useEffect(() => {
//     const fetchTours = async () => {
//       try {
//         const response = await axios.get('http://35.225.244.52:8000/tour/')
//         const data = response.data

//         const toursArray = Array.isArray(data) ? data : data.results || []

//         const formatted: TourApiInterface[] = toursArray.map(
//           (tour: any, index: number) => ({
//             id: tour.id,
//             image: tour.image,
//             title: tour.title,
//             average_rating: tour.rating ?? null,
//             description: tour.description,
//             duration: `${tour.duration_days}`,
//             price: tour.price,
//             collection_point: tour.collection_point,
//             start_date: tour.start_date,
//             level: tour.level,
//             departures: tour.departures,
//             author: tour.author,
//             place: tour.place,
//           }),
//         )

//         setTours(formatted)
//       } catch (error) {
//         console.error('Error fetching tour data:', error)
//       }
//     }

//     fetchTours()
//   }, [])

//   return tours
// }

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

export const mockTours: TourApiInterface[] = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Q9gpzG1K4xDWCvVMtwaco6vDVt4Xk5zcOA&s',
    title: 'Issyk-Kul Adv',
    average_rating: 4.0,
    description: 'Красивое путешествие вокруг озера Иссык-Куль.',
    duration: '5',
    price: 15000,
    collection_point: 'Бишкек',
    start_date: '2025-09-01',
    level: 'easy',
    departures: [],
    author: 'MegaLab',
    place: 10,
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0R6HGrk2yzHL_t0DsvWemDNE5N7n1r6cAw&s',
    title: 'Ala-Archa Hiking',
    average_rating: 4.6,
    description: 'Поход в горный национальный парк Ала-Арча.',
    duration: '2',
    price: 7000,
    collection_point: 'Бишкек',
    start_date: '2025-08-25',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 5,
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '4',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'hard',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'easy',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 7,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 8,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 9,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 10,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '56',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'hard',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 11,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '4',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'medium',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 12,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '4',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'hard',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
  {
    id: 13,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Rr8lV4O3J9Agx3VR7EzXgA9uQ',
    title: 'Song-Kul Nomad Experience',
    average_rating: 4.9,
    description: 'Юрты, кони и настоящая кочевая жизнь у озера Сон-Куль.',
    duration: '4',
    price: 20000,
    collection_point: 'Нарын',
    start_date: '2025-09-10',
    level: 'hard',
    departures: [],
    author: 'MegaLab',
    place: 8,
  },
]

export const useCardData = (): TourApiInterface[] => {
  return mockTours
}
