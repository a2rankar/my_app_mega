
import styles from './GeneralInfo.module.scss'
import { UserMock } from '../../types/types'

const GeneralInfo = ({ user }: { user: UserMock }) => {

  return (
    <div className={styles.profile}>
      <div className={styles.row}>
        <p className={styles.label}>ФИО:</p>
        <span className={styles.value}>{user.username}</span>
      </div>

      <div className={styles.row}>
        <p className={styles.label}>Аватар:</p>
        <img src={user.image || '/default-avatar.png'} alt="avatar" className={styles.avatarImage} />
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
        <span className={styles.value}>{user.phone_number || '—'}</span>
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
  )
}

export default GeneralInfo
