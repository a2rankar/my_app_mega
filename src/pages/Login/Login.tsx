import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'
import AuthInitial from './AuthInitial/AuthInital'
import RegisterForm from './Regsiter/RegisterForm'
import EmailLoginForm from './EmailLoginForm/EmailLoginForm'
import TelegramLoginForm from './TelegramLoginForm/TelegramLoginForm'
import TelegramOTPForm from './TelegramOTPForm/TelegramOTPForm'

type AuthWay =
  | 'initial'
  | 'email'
  | 'telegram'
  | 'register'
  | 'register_otp'
  | 'telegram_otp'

const LoginModal = () => {
  const navigate = useNavigate()
  const [authWay, setAuthWay] = useState<AuthWay>('initial')

  const handleClose = () => navigate(-1)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className={styles.drop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close_btn}>
          {authWay !== 'initial' && (
            <button onClick={() => setAuthWay('initial')}>Назад</button>
          )}
          <button onClick={handleClose} className={styles.close}>
            &times;
          </button>
        </div>

        <div className={styles.container_lay2}>
          {authWay === 'initial' && (
            <AuthInitial
              setAuthWay={setAuthWay}
              onOpenRegister={() => setAuthWay('register')}
            />
          )}

          {authWay === 'register' && <RegisterForm setAuthWay={setAuthWay} />}
          {authWay === 'email' && (
            <EmailLoginForm onOpenRegister={() => setAuthWay('register')} />
          )}
          {authWay === 'telegram' && (
            <TelegramLoginForm setAuthWay={setAuthWay} />
          )}
          {authWay === 'telegram_otp' && (
            <TelegramOTPForm setAuthWay={setAuthWay} />
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginModal
