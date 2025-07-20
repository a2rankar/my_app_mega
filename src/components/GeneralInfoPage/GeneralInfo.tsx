import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../api/data/profileData'
import { User } from '../../types/types'
import Header from '../Header/Header'
import styles from './GeneralInfo.module.scss'
const GeneralInfo = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!id) return
        const data = await getUserById(Number(id))
        setUser(data)
      } catch (err) {
        console.error('Ошибка при загрузке:', err)
        setError('Не удалось загрузить пользователя')
      }
    }

    fetchUser()
  }, [id])

  if (error) return <p>{error}</p>
  if (!user) return <p>Загрузка профиля...</p>

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.row}>
          <p className={styles.label}>ФИО:</p>
          <span className={styles.value}>—</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Аватар:</p>
          <img src={styles.logo} alt="avatar" className={styles.avatarImage} />
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Имя пользователя:</p>
          <span className={styles.value}>{user.username}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Дата рождения:</p>
          <span className={styles.value}>{user.birth_date || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Телефон:</p>
          <span className={styles.value}>{user.phone_number}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Email:</p>
          <span className={styles.value}>{user.email || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Status:</p>
          <span className={styles.value}>{user.status || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Последний заход:</p>
          <span className={styles.value}>{user.last_time || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Количество детей:</p>
          <span className={styles.value}>{user.childs || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Место проживания:</p>
          <span className={styles.value}>{user.location || '—'}</span>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Login:</p>
          <span className={styles.value}>{user.login || '—'}</span>
        </div>
      </div>
    </>
  )
}

export default GeneralInfo
