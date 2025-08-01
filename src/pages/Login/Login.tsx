// import { useEffect, useState } from 'react'
// import 'react-phone-input-2/lib/style.css'
// import PhoneInput from 'react-phone-input-2'
// import { useNavigate, Link } from 'react-router-dom'
// import styles from './Login.module.scss'
// import { useForm } from 'react-hook-form'
// import axios from 'axios'
// import { sendDataRegistration } from '../../api/data/profileData'
// import { verifyOTP } from '../../api/data/profileData'
// import { sendPhoneNumber } from '../../api/data/profileData'
// const LoginModal = () => {
//   const navigate = useNavigate()

//   type AuthWay =
//     | 'initial'
//     | 'email'
//     | 'telegram'
//     | 'register'
//     | 'register_otp'
//     | 'telegram_otp'
//   type TelegramWay = 'input' | 'otp'

//   const [authWay, setAuthWay] = useState<AuthWay>('initial')
//   const [telegramWay, setTelegramWay] = useState<TelegramWay>('input')

//   const {
//     register: registerTelegram,
//     handleSubmit: handleTelegramSubmit,
//     formState: { errors: telegramErrors },
//     setValue: setTelegramValue,
//     getValues: getTelegramValues,
//   } = useForm()

//   const {
//     register: registerEmail,
//     handleSubmit: handleEmailSubmit,
//     formState: { errors: emailErrors },
//   } = useForm()

//   const {
//     register: registerRegister,
//     handleSubmit: handleRegisterSubmit,
//     formState: { errors: registerErrors },
//   } = useForm()

//   const handleClose = () => {
//     navigate(-1)
//   }

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         handleClose()
//       }
//     }
//     document.addEventListener('keydown', handleKeyDown)
//     return () => document.removeEventListener('keydown', handleKeyDown)
//   }, [])

//   // const full = '+996555123456';
//   // const code = full.slice(0, full.length - 9); // или RegExp
//   // const number = full.slice(-9);

//   return (
//     <div className={styles.drop} onClick={handleClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.close_btn}>
//           <button type="button" onClick={() => setAuthWay('initial')}>
//             back
//           </button>
//           <button className={styles.close} onClick={handleClose}>
//             &times;
//           </button>
//         </div>

//         <div className={styles.container_lay2}>
//           {authWay === 'initial' && (
//             <div className={styles.authOptions}>
//               <div className={styles.login}>Вход</div>
//               <button onClick={() => setAuthWay('telegram')}>
//                 Войти через Telegram
//               </button>
//               <button onClick={() => setAuthWay('email')}>
//                 Войти через почту
//               </button>
//               <button onClick={() => setAuthWay('register')}>
//                 Пройти регистрацию
//               </button>
//             </div>
//           )}
//           {authWay === 'register' && (
//             <form onSubmit={handleRegisterSubmit(sendDataRegistration)}>
//               <h2>Регистрация</h2>

//               <input
//                 type="email"
//                 placeholder="Введите email"
//                 {...registerRegister('email', { required: 'Email обязателен' })}
//               />
//               {registerErrors.email && <p>{registerErrors.email.message}</p>}

//               <input
//                 type="login"
//                 placeholder="Введите логин"
//                 {...registerRegister('login', { required: 'Login обязателен' })}
//               />
//               {registerErrors.email && <p>{registerErrors.login.message}</p>}

//               <input
//                 type="password"
//                 placeholder="Введите пароль"
//                 {...registerRegister('password', {
//                   required: 'Пароль обязателен',
//                   minLength: { value: 6, message: 'Минимум 6 символов' },
//                 })}
//               />
//               {registerErrors.password && (
//                 <p>{registerErrors.password.message}</p>
//               )}

//               <div className={styles.log_reg}>
//                 <button type="submit" className={styles.login}>
//                   Зарегистрироваться
//                 </button>
//                 <button
//                   type="button"
//                   className={styles.registration}
//                   onClick={() => setAuthWay('initial')}
//                 >
//                   Назад
//                 </button>
//               </div>
//             </form>
//           )}

//           {authWay === 'telegram' && (
//             <div className={styles.telegramLogin}>
//               {telegramWay === 'input' && (
//                 <form
//                   onClick={handleTelegramSubmit(({ phone, countryCode }) => {
//                     sendPhoneNumber(countryCode + phone)
//                     setTelegramWay('otp')
//                   })}
//                 >
//                   <h2>Login by Telegram</h2>
//                   <div className={styles.phoneWrapper}>
//                     <select
//                       {...registerTelegram('countryCode')}
//                       className={styles.countryCode}
//                       defaultValue="+996"
//                     >
//                       <option value="+1">🇺🇸 +1</option>
//                       <option value="+44">🇬🇧 +44</option>
//                       <option value="+49">🇩🇪 +49</option>
//                       <option value="+7">🇷🇺 +7</option>
//                       <option value="+996">🇰🇬 +996</option>
//                       <option value="+998">🇺🇿 +998</option>
//                     </select>

//                     <input
//                       type="tel"
//                       placeholder="Номер без кода страны"
//                       className={styles.tgNumber}
//                       {...registerTelegram('phone', {
//                         required: 'Номер обязателен',
//                         pattern: {
//                           value: /^[0-9]{6,12}$/,
//                           message: 'Некорректный номер',
//                         },
//                       })}
//                     />
//                   </div>

//                   {telegramErrors.phone && (
//                     <p>{telegramErrors.phone.message}</p>
//                   )}
//                   <button
//                     type="button"
//                     className={styles.next}
//                     onClick={handleTelegramSubmit(({ phone, countryCode }) => {
//                       sendPhoneNumber(countryCode + phone)
//                     })}
//                   >
//                     Next
//                   </button>
//                 </form>
//               )}

//               {telegramWay === 'otp' && (
//                 <form
//                   onSubmit={handleTelegramSubmit(({ otp }) => {
//                     const phone = `${getTelegramValues('countryCode')}${getTelegramValues('phone')}`
//                     verifyOTP(phone, otp)
//                   })}
//                 >
//                   <input
//                     type="text"
//                     placeholder="Код из Telegram"
//                     {...registerTelegram('otp', {
//                       required: 'Код обязателен',
//                       minLength: { value: 4, message: 'Минимум 4 символа' },
//                     })}
//                   />
//                   {telegramErrors.otp && <p>{telegramErrors.otp.message}</p>}
//                   <button type="submit">Подтвердить</button>
//                   <button type="button" onClick={() => setTelegramWay('input')}>
//                     Назад
//                   </button>
//                 </form>
//               )}
//             </div>
//           )}
//           {authWay === 'email' && (
//             <form
//               className={styles.regsitration_form}
//               onSubmit={handleEmailSubmit((data) => {
//                 console.log('email of login: ', data)
//                 navigate('/')
//               })}
//             >
//               <h2>Email Login</h2>
//               <input
//                 type="email"
//                 placeholder="Введите почту"
//                 {...registerEmail('email', { required: 'Email обязателен' })}
//               />
//               {emailErrors.email && <p>{emailErrors.email.message}</p>}
//               <input
//                 type="password"
//                 placeholder="Введите пароль"
//                 {...registerEmail('password', {
//                   required: 'Пароль обязателен',
//                 })}
//               />
//               {emailErrors.password && <p>{emailErrors.password.message}</p>}
//               <Link to="" className={styles.link}>
//                 <p>forgot password?</p>
//               </Link>
//               <div className={styles.log_reg}>
//                 <button type="submit" className={styles.login}>
//                   Login
//                 </button>
//                 <button className={styles.registration}>Registration</button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginModal

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
          {authWay === 'initial' && <AuthInitial setAuthWay={setAuthWay} />}
          {authWay === 'register' && <RegisterForm setAuthWay={setAuthWay} />}
          {authWay === 'email' && <EmailLoginForm />}
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
