import { useForm } from 'react-hook-form'
import { verifyOTP } from '../../../api/data/profileData'

const TelegramOTPForm = ({ setAuthWay }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ otp }) => {
    const phone = `${getValues('countryCode')}${getValues('phone')}`
    verifyOTP(phone, otp)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('otp', {
          required: 'Код обязателен',
          minLength: { value: 4, message: 'Минимум 4 символа' },
        })}
        placeholder="Код из Telegram"
      />
      {errors.otp && <p>{errors.otp.message}</p>}
      <button type="submit">Подтвердить</button>
      <button type="button" onClick={() => setAuthWay('telegram')}>
        Назад
      </button>
    </form>
  )
}

export default TelegramOTPForm
