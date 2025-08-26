import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Cards/Card'
import Gids from '../../components/Gids/Gids'
import Comment from '../../components/Comments/Comment'
import InTouch from '../../components/Connect/InTouch'
import Footer from '../../components/Footer/Footer'
import { useCardData } from '../../api/data/cardData'
import { gidsData } from '../../api/data/gidsData'

const Home: React.FC = () => {
  const data = useCardData()
  const [showBest, setShowBest] = useState(false)
  const [showAllCards, setShowAllCards] = useState(false)
  const [showAllGids, setShowAllGids] = useState(false)
  const filteredData = showBest
    ? data.filter((tour) => tour.average_rating && tour.average_rating >= 4.5)
    : data

  const visibleData = showAllCards ? filteredData : filteredData.slice(0, 6)
  const visibleGids = showAllGids ? gidsData : gidsData.slice(0, 3)
  return (
    <>
      <div className={styles.cont}>
        <Header />
      </div>

      <div className={styles.content}>
        <div className={styles.content_page}>
          <button
            className={`${styles.left} ${showBest ? styles.active : ''}`}
            onClick={() => {
              setShowBest(true)
              setShowAllCards(false)
            }}
          >
            best
          </button>
          <button
            className={`${styles.right} ${!showBest ? styles.active : ''}`}
            onClick={() => {
              setShowBest(false)
              setShowAllCards(false)
            }}
          >
            all
          </button>
        </div>

        <div className={styles.card_page}>
          <Card data={visibleData} />
        </div>

        {filteredData.length > 6 && (
          <button
            onClick={() => setShowAllCards((prev) => !prev)}
            className={styles.tour_btn}
          >
            <p>{showAllCards ? 'Hide tours' : 'Watch all tours'}</p>
          </button>
        )}

        <div className={styles.gids}>
          <Gids gids={visibleGids} />
        </div>

        {gidsData.length > 3 && (
          <button
            className={styles.btn_gid}
            onClick={() => setShowAllGids((prev) => !prev)}
          >
            <p>{showAllGids ? 'Hide gids' : 'Show all gids'}</p>
          </button>
        )}

        <div className={styles.comment}>
          <Comment />
        </div>

        <div className={styles.in}>
          <InTouch />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
