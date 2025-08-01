import { useForm } from 'react-hook-form'
import { sendDataRegistration } from '../../../api/data/profileData'

const RegisterForm = ({ setAuthWay }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(sendDataRegistration)}>
      <h2>Регистрация</h2>

      <input
        {...register('email', { required: 'Email обязателен' })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('login', { required: 'Login обязателен' })}
        placeholder="Login"
      />
      {errors.login && <p>{errors.login.message}</p>}

      <input
        {...register('password', {
          required: 'Пароль обязателен',
          minLength: { value: 6, message: 'Минимум 6 символов' },
        })}
        placeholder="Пароль"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Зарегистрироваться</button>
      <button type="button" onClick={() => setAuthWay('initial')}>
        Назад
      </button>
    </form>
  )
}

export default RegisterForm
