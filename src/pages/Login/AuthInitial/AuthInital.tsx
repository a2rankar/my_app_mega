// import { useState } from 'react'
// import styles from './AuthInitial.module.scss'
// import RegisterForm from '../Regsiter/RegisterForm'

// const AuthInitial = ({ setAuthWay }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false) // Состояние для отображения модалки

//   const openModal = () => {
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   return (
//     <div className={styles.selection}>
//       <h2>Вход</h2>
//       <div className={styles.container}>
//         <button
//           className={styles.btn_select}
//           onClick={() => setAuthWay('telegram')}
//         >
//           Войти через Telegram
//         </button>
//         <button
//           className={styles.btn_select}
//           onClick={() => setAuthWay('email')}
//         >
//           Войти через почту
//         </button>

//         <button className={styles.btn_select} onClick={openModal}>
//           Пройти регистрацию
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <RegisterForm closeModal={closeModal} />{' '}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AuthInitial

import styles from './AuthInitial.module.scss'


type Props = {
  setAuthWay: (way: 'telegram' | 'email' | 'register') => void
  onOpenRegister: () => void
}


const AuthInitial = ({ setAuthWay, onOpenRegister }: Props) => {
  return (
    <div className={styles.selection}>
      <h2>Вход</h2>
      <div className={styles.container}>
        <button
          className={styles.btn_select}
          onClick={() => setAuthWay('telegram')}
        >
          Войти через Telegram
        </button>
        <button
          className={styles.btn_select}
          onClick={() => setAuthWay('email')}
        >
          Войти через почту
        </button>
        <button className={styles.btn_select} onClick={onOpenRegister}>
          Пройти регистрацию
        </button>
      </div>
    </div>
  )
}

export default AuthInitial
