import { useForm } from 'react-hook-form'
import { sendPhoneNumber } from '../../../api/data/profileData'

const TelegramLoginForm = ({ setAuthWay }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = ({ countryCode, phone }) => {
    sendPhoneNumber(countryCode + phone)
    setAuthWay('telegram_otp')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Войти через Telegram</h2>
      <select {...register('countryCode')} defaultValue="+996">
        <option value="+996">🇰🇬 +996</option>
        <option value="+7">🇷🇺 +7</option>
        <option value="+998">🇺🇿 +998</option>
      </select>

      <input
        {...register('phone', {
          required: 'Номер обязателен',
          pattern: { value: /^[0-9]{6,12}$/, message: 'Некорректный номер' }
        })}
        placeholder="Номер телефона"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <button type="submit">Отправить код</button>
    </form>
  )
}

export default TelegramLoginForm
