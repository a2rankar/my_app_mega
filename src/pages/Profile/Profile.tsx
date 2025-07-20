import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import GeneralInfo from '../../components/GeneralInfoPage/GeneralInfo'
import Statistics from '../../components/StatisticPage/Statistic'
import TourHistory from '../TourHistoryPage/TourHistory'
import styles from './ProfilePage.module.scss'
import Header from '../../components/Header/Header'
const Profile = () => {
  const tabs = ['Общая информация', 'Моя статистика', 'История туров']
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const current = tabRefs.current[activeTab]
    if (current) {
      const { offsetLeft, offsetWidth } = current
      setLineStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeTab])

  return (
    <div className={styles.profilePage}>
      <Header />
      <div className={styles.tabList}>
        <div className={styles.tabWrapper}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              ref={(el) => (tabRefs.current[index] = el)}
              className={activeTab === index ? styles.activeTab : ''}
            >
              {tab}
            </button>
          ))}
          <span className={styles.activeLine} style={lineStyle} />
        </div>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 0 && <GeneralInfo />}
        {activeTab === 1 && <Statistics />}
        {activeTab === 2 && <TourHistory />}
      </div>
    </div>
  )
}

export default Profile
