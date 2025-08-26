
import { useState, useEffect } from 'react'
import heartEmpty from '../../assets/heart.svg'
import heartFilled from '../../assets/filled_heart.svg'
import styles from './Card.module.scss'
import { useCardData, TourApiInterface } from '../../api/data/cardData'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
interface CardProps {
  data: TourApiInterface[]
  limit?: number
}
const Card: React.FC<CardProps> = ({ data, limit = 6 }) => {
  const { t } = useTranslation()
  // const [isFavorite, setIsFavorite] = useState(false)

  // useEffect(() => {
  //   const saved = localStorage.getItem('favorites')
  //   if (saved) {
  //     setFavorites(JSON.parse(saved))
  //   }
  // }, [])
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
      localStorage.setItem('favorites', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className={styles.fullBlog}>
      {data.map((card) => (
        <div className={styles.container} key={card.id}>
          <div className={styles.imgHover}>
            <img
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Q9gpzG1K4xDWCvVMtwaco6vDVt4Xk5zcOA&s'
              }
              alt="logo"
            />

            {/* <img
              src={isFavorite ? heartEmpty : heartFilled}
              alt="heart"
              className={styles.heart}
              onClick={() => setIsFavorite(!isFavorite)}
            /> */}
            <img
              src={favorites.includes(card.id) ? heartFilled : heartEmpty}
              alt="heart"
              className={styles.heart}
              onClick={() => toggleFavorite(card.id)}
            />

            <div className={styles.hoverOverlay}>
              <Link to={`/tours/${card.id}`} className={styles.book}>
                {t('book')}
              </Link>
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.first_row}>
              <p>{card.title}</p>
              <div className={styles.rate}>
                <p>{card.average_rating}</p>
                <div className={styles.rating}></div>
              </div>
            </div>
            <div className={styles.paragraf}>
              <p>
                {card.duration} {t('days')}
              </p>
              <p>{card.price}</p>
              <p>
                {t('left_places')}: {card.place}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Card
