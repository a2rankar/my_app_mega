import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getUserByEmail } from '../../../api/data/profileData'

const EmailLoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: { email: string; password: string }) => {
    const user = await getUserByEmail(data.email)
    console.log('user', user)
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
        placeholder="Пароль"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Войти</button>
    </form>
  )
}

export default EmailLoginForm
