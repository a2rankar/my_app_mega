import { useForm } from 'react-hook-form'
import { sendDataRegistration } from '../../../api/data/profileData'

const RegisterForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await sendDataRegistration(data)
      closeModal() 
    } catch (error) {
      console.error('Ошибка при регистрации:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="button" onClick={closeModal}>
        Назад
      </button>{' '}
    </form>
  )
}

export default RegisterForm
