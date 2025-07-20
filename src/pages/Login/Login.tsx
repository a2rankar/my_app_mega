import { useEffect, useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const LoginModal = () => {
  const navigate = useNavigate()

  type AuthWay =
    | 'initial'
    | 'email'
    | 'telegram'
    | 'register'
    | 'register_otp'
    | 'telegram_otp'
  type TelegramWay = 'input' | 'otp'

  const [authWay, setAuthWay] = useState<AuthWay>('initial')
  const [telegramWay, setTelegramWay] = useState<TelegramWay>('input')

  const {
    register: registerTelegram,
    handleSubmit: handleTelegramSubmit,
    formState: { errors: telegramErrors },
    setValue: setTelegramValue,
    getValues: getTelegramValues,
  } = useForm()

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm()

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm()

  const handleClose = () => {
    navigate(-1)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const sendDataRegistration = async (data: {
    login: string
    email: string
    password: string
  }) => {
    try {
      const res = await axios.post(
        'http://35.225.244.52:8000/register-with-email/',
        data,
        {
          withCredentials: true,
        },
      )
      navigate('/')
    } catch (err: any) {
      console.error('error: а:', err.response?.data || err.message)
    }
  }
  const sendPhoneNumber = async (phone: string) => {
    try {
      const res = await axios.post(
        'http://35.225.244.52:8000/auth-with-tg/',
        { phone_number: phone },
        {
          withCredentials: true,
        },
      )
      console.log('Код отправлен!', res.data)
      navigate('/profile')
      setTelegramWay('otp')
    } catch (err: any) {
      console.error(
        'Ошибка при отправке номера:',
        err.response?.data || err.message,
      )
    }
  }

  const verifyOTP = async (phone: string, otp: string) => {
    try {
      const res = await axios.post(
        'http://35.225.244.52/otp-verify/',
        {
          phone_number: phone,
          code: otp,
        },
        {
          withCredentials: true,
        },
      )
      console.log('Успешная авторизация:', res.data)
      navigate('/profile')
    } catch (err: any) {
      console.error(
        'Ошибка при проверке кода:',
        err.response?.data || err.message,
      )
    }
  }
  // const full = '+996555123456';
  // const code = full.slice(0, full.length - 9); // или RegExp
  // const number = full.slice(-9);

  return (
    <div className={styles.drop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close_btn}>
          <button type="button" onClick={() => setAuthWay('initial')}>
            back
          </button>
          <button className={styles.close} onClick={handleClose}>
            &times;
          </button>
        </div>

        <div className={styles.container_lay2}>
          {authWay === 'initial' && (
            <div className={styles.authOptions}>
              <div className={styles.login}>Вход</div>
              <button onClick={() => setAuthWay('telegram')}>
                Войти через Telegram
              </button>
              <button onClick={() => setAuthWay('email')}>
                Войти через почту
              </button>
              <button onClick={() => setAuthWay('register')}>
                Пройти регистрацию
              </button>
            </div>
          )}
          {authWay === 'register' && (
            <form onSubmit={handleRegisterSubmit(sendDataRegistration)}>
              <h2>Регистрация</h2>

              <input
                type="email"
                placeholder="Введите email"
                {...registerRegister('email', { required: 'Email обязателен' })}
              />
              {registerErrors.email && <p>{registerErrors.email.message}</p>}

              <input
                type="login"
                placeholder="Введите логин"
                {...registerRegister('login', { required: 'Login обязателен' })}
              />
              {registerErrors.email && <p>{registerErrors.login.message}</p>}

              <input
                type="password"
                placeholder="Введите пароль"
                {...registerRegister('password', {
                  required: 'Пароль обязателен',
                  minLength: { value: 6, message: 'Минимум 6 символов' },
                })}
              />
              {registerErrors.password && (
                <p>{registerErrors.password.message}</p>
              )}

              <div className={styles.log_reg}>
                <button type="submit" className={styles.login}>
                  Зарегистрироваться
                </button>
                <button
                  type="button"
                  className={styles.registration}
                  onClick={() => setAuthWay('initial')}
                >
                  Назад
                </button>
              </div>
            </form>
          )}

          {authWay === 'telegram' && (
            <div className={styles.telegramLogin}>
              {telegramWay === 'input' && (
                <form
                  onSubmit={handleTelegramSubmit(({ phone, countryCode }) =>
                    sendPhoneNumber(countryCode + phone),
                  )}
                >
                  <h2>Login by Telegram</h2>
                  <div className={styles.phoneWrapper}>
                    <select
                      {...registerTelegram('countryCode')}
                      className={styles.countryCode}
                      defaultValue="+996"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+996">🇰🇬 +996</option>
                      <option value="+998">🇺🇿 +998</option>
                    </select>

                    <input
                      type="tel"
                      placeholder="Номер без кода страны"
                      className={styles.tgNumber}
                      {...registerTelegram('phone', {
                        required: 'Номер обязателен',
                        pattern: {
                          value: /^[0-9]{6,12}$/,
                          message: 'Некорректный номер',
                        },
                      })}
                    />
                  </div>

                  {telegramErrors.phone && (
                    <p>{telegramErrors.phone.message}</p>
                  )}
                  <button
                    type="button"
                    className={styles.next}
                    onClick={handleTelegramSubmit(({ phone, countryCode }) => {
                      sendPhoneNumber(countryCode + phone)
                    })}
                  >
                    Next
                  </button>
                </form>
              )}

              {telegramWay === 'otp' && (
                <form
                  onSubmit={handleTelegramSubmit(({ otp }) => {
                    const phone = `${getTelegramValues('countryCode')}${getTelegramValues('phone')}`
                    verifyOTP(phone, otp)
                  })}
                >
                  <input
                    type="text"
                    placeholder="Код из Telegram"
                    {...registerTelegram('otp', {
                      required: 'Код обязателен',
                      minLength: { value: 4, message: 'Минимум 4 символа' },
                    })}
                  />
                  {telegramErrors.otp && <p>{telegramErrors.otp.message}</p>}
                  <button type="submit">Подтвердить</button>
                  <button type="button" onClick={() => setTelegramWay('input')}>
                    Назад
                  </button>
                </form>
              )}
            </div>
          )}
          {authWay === 'email' && (
            <form
              className={styles.regsitration_form}
              onSubmit={handleEmailSubmit((data) => {
                console.log('email of login: ', data)
                navigate('/')
              })}
            >
              <h2>Email Login</h2>
              <input
                type="email"
                placeholder="Введите почту"
                {...registerEmail('email', { required: 'Email обязателен' })}
              />
              {emailErrors.email && <p>{emailErrors.email.message}</p>}
              <input
                type="password"
                placeholder="Введите пароль"
                {...registerEmail('password', {
                  required: 'Пароль обязателен',
                })}
              />
              {emailErrors.password && <p>{emailErrors.password.message}</p>}
              <Link to="" className={styles.link}>
                <p>forgot password?</p>
              </Link>
              <div className={styles.log_reg}>
                <button type="submit" className={styles.login}>
                  Login
                </button>
                <button className={styles.registration}>Registration</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginModal
