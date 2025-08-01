import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { useCardData, TourApiInterface } from '../../api/data/cardData'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
interface CardProps {
  data: TourApiInterface[]
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { t } = useTranslation()

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
              <p>{card.date}</p>
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
