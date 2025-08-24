import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getUserByEmail } from '../../../api/data/profileData'
import { setAccessToken } from '../../../api/axiosInstance'
import styles from './Email.module.scss'

type Props = {
  onOpenRegister: () => void
}

type FormFields = {
  email: string
  password: string
  rememberMe: boolean
}

const EmailLoginForm = ({ onOpenRegister }: Props) => {
  const navigate = useNavigate()
  const emailFromStorage = localStorage.getItem('email') || ''

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: emailFromStorage,
      password: '',
      rememberMe: !!emailFromStorage,
    },
  })

  const onSubmit = async (data: FormFields) => {
    try {
      // стартуем флоу входа по email (твой бэк на /auth-with-email/ может прислать accessToken)
      const res = await getUserByEmail(data.email)

      // если бэк возвращает accessToken — кладём его в память для Bearer
      if (res?.accessToken) {
        setAccessToken(res.accessToken)
      }

      if (data.rememberMe) {
        localStorage.setItem('email', data.email)
      } else {
        localStorage.removeItem('email')
      }

      navigate('/profile')
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Email Login</h2>

      <input
        {...register('email', { required: 'Email обязателен' })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('password', { required: 'Пароль обязателен' })}
        type="password"
        placeholder="Пароль"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          <input
            className={styles.remember}
            type="checkbox"
            {...register('rememberMe')}
          />{' '}
          Запомнить меня
        </label>
      </div>

      <div>
        <a
          href="/forgot-password"
          style={{ textDecoration: 'none', color: 'blue' }}
        >
          Забыли пароль?
        </a>
      </div>

      <div className={styles.btns}>
        <button className={styles.login_btn} type="submit">
          Войти
        </button>
        <button
          type="button"
          className={styles.registration_btn}
          onClick={onOpenRegister}
        >
          Регистрация
        </button>
      </div>
    </form>
  )
}

export default EmailLoginForm
