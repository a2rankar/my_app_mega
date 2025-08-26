import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import GeneralInfo from '../../components/GeneralInfoPage/GeneralInfo'
import Statistics from './Statistic'
import TourHistory from './TourHistory'
import styles from './ProfilePage.module.scss'
import Header from '../../components/Header/Header'
import { TourHistoryProps, UserMock } from '../../types/types'
import { StatisticsProps } from '../../types/types'
import Registration from '../Registration/Registration'

const Profile = () => {
  const tabs = ['Общая информация', 'Моя статистика', 'История туров']
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 })
  const mockUser: UserMock[] = [
    {
      id: 1,
      username: 'Иван Иванов',
      image: null,
      login: 'ivan123',
      birth_date: '1990-05-12',
      email: 'ivan@example.com',
      phone_number: '+996 555 123 456',
      status: 'Активен',
      last_time: '2025-08-23 18:45',
      childs: 2,
      location: 'Бишкек, Кыргызстан',
    },
    {
      id: 2,
      username: 'Иван Petrashev',
      image: null,
      login: 'ivan1232',
      birth_date: '1990-05-12',
      email: 'ivan2@example.com',
      phone_number: '+996 555 123 4562',
      status: 'Активен2',
      last_time: '2025-08-23 18:452',
      childs: 22,
      location: 'Бишкек, Кыргызстан2',
    },
    {
      id: 3,
      username: 'Iron Man',
      image: null,
      login: 'ivan1232',
      birth_date: '1990-05-12',
      email: 'ivan2@example.com',
      phone_number: '+996 555 123 4562',
      status: 'Активен2',
      last_time: '2025-08-23 18:452',
      childs: 22,
      location: 'Бишкек, Кыргызстан2',
    },
    {
      id: 4,
      username: 'Superman',
      image: null,
      login: 'ivan1232',
      birth_date: '1990-05-12',
      email: 'ivan2@example.com',
      phone_number: '+996 555 123 4562',
      status: 'Активен2',
      last_time: '2025-08-23 18:452',
      childs: 22,
      location: 'Бишкек, Кыргызстан2',
    },
  ]
  const mockStatistics = {
    data : {
    email: 'ivan@example.com',
    phone: '+996 555 123 456',
    date_of_registration: '12.03.2024',
    }
  }

  const mockTourHistory: TourHistoryProps = {
    data: [
      {
        id: 1,
        title: 'Тур в Сон-Куль',
        date: '2024-06-15',
        status: 'Завершён',
      },
      {
        id: 2,
        title: 'Поездка в Ала-Арчу',
        date: '2024-09-02',
        status: 'Отменён',
      },
      {
        id: 3,
        title: 'Экскурсия в Ош',
        date: '2024-11-12',
        status: 'Завершён',
      },
    ],
  }
  const { id } = useParams<{ id: string }>()
  const selectedUser = mockUser.find((user) => user.id === Number(id))
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
        {activeTab === 0 && <GeneralInfo user={selectedUser} />}
        {activeTab === 1 && <Statistics data={mockStatistics} />}
        {activeTab === 2 && <TourHistory data={mockTourHistory.data} />}
      </div>
    </div>
  )
}

export default Profile
