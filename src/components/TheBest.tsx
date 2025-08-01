import { useState } from 'react'

interface Tour {
  id: string
  title: string
  description: string
  image: string
  rate: number
}

interface TheBestToursProps {
  tours: Tour[]
}

export const TheBestTours = ({ tours }: TheBestToursProps) => {
  const [showOnlyBest, setShowOnlyBest] = useState(true)

  const filteredTours = showOnlyBest
    ? tours.filter((tour) => tour.rate >= 4.5)
    : tours

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">🔥 Лучшие туры</h2>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showOnlyBest}
          onChange={(e) => setShowOnlyBest(e.target.checked)}
        />
        Показать только с рейтингом 4.5+
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{tour.title}</h3>
            <p className="text-sm text-gray-600">{tour.description}</p>
            <div className="mt-2 text-yellow-500">
              {'★'.repeat(Math.floor(tour.rate)) +
                (tour.rate % 1 >= 0.5 ? '½' : '')}
              {'☆'.repeat(5 - Math.ceil(tour.rate))}
              <span className="ml-2 text-gray-500 text-sm">({tour.rate})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
