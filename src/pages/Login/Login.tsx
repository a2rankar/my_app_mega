// import React, { useEffect, useState } from "react"
// import { useNavigate, Link } from "react-router-dom";
// import styles from './Login.module.scss';
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// const LoginModal = () => {
//   const navigate = useNavigate();

//   type AuthWay = 'initial' | 'email' | 'telegram' | 'register';
//   type TelegramWay = 'input' | 'otp';

//   const [authWay, setAuthWay] = useState<AuthWay>('initial');
//   const [telegramWay, setTelegramWay] = useState<TelegramWay>('input')

//   const {
//     register: registerTelegram,
//     handleSubmit: handleTelegramSubmit,
//     formState: {errors: telegramErrors},
//     setValue: setTelegramValue,
//     getValues: getTelegramValues,
//   } = useForm();

//   const {
//     register: registerEmail,
//     handleSubmit: handleEmailSubmit,
//     formState: {errors: emailErrors },
//   } = useForm();

//   const {
//     register: registerRegister,
//     handleSubmit: handleRegisterSubmit,
//     formState: {errors: registerErrors},
//   } = useForm();


//   const handleClose = () => {
//     navigate(-1);
//   }
//   useEffect (() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if(e.key === 'Escape') {
//         handleClose();
//       };
//     };
//   document.addEventListener('keydown', handleKeyDown);
//   return () => document.removeEventListener('keydown', handleKeyDown)
//   }, []);


//     const byNumber = async(phone: string) => {
//         try {
//           const res = await axios.post('', {phone_number: phone});
//           setTelegramWay('otp');
//         } catch (error) {
//           console.error('error while sending number: ', error);
//         }
//     }

//     const byOTP = async(phone: string, otp: string) => {
//       try {
//         const res = await axios.post('', {phone_number: phone, code: otp});
        
//       } catch (error) {
//         console.error('error while sending otp: ', error);
//       }
//     }
//   return (
    
//     <div className={styles.drop} onClick={handleClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.close_btn}>
//            <button type="button" onClick={() => setAuthWay('initial')}>back</button>
//             <button className={styles.close} onClick={handleClose}>
//                 &times;
//             </button>
            
//         </div>
        
       
//         <div className={styles.container_lay2}>
//           {authWay === 'initial' && (
//             <div className={styles.authOptions}>
//               <button onClick={() => setAuthWay('telegram')}>telegram</button>
//                 <button onClick={() => setAuthWay('email')}>email</button>
//                   <button onClick={() => setAuthWay('register')}>register</button>
//             </div>
//           )}
         
//           {authWay === 'telegram' && (
//             <div className={styles.telegramLogin}>
//                 {telegramWay === 'input' && (
//                   <form onSubmit={handleTelegramSubmit(({phone}) => {
//                     console.log("number of phone: ", phone);

//                     setTelegramWay('otp');
//                   })}>
//                     <h2>Login by Telegram</h2>
//                     <input type="tel" placeholder="Номер телефона Telegram"
//                     {...registerTelegram('phone', {
//                       required: "number is required",
//                       pattern: {
//                         value: /^\+?[0-9]{10,15}$/,
//                         message: "Incorrect number",
//                       },
//                     })}/>
//                     {telegramErrors.phone && <p>{telegramErrors.phone.message}</p>}
//                     <button type="submit">Отправить код</button>
//                     <button type="button" onClick={() => setTelegramWay}></button>
//                   </form>
//                 )}

//                 {telegramWay === 'otp' && (
//                   <form onSubmit={handleTelegramSubmit(({otp}) => {
//                     const phone = getTelegramValues('phone');
//                     console.log('Proverka coda: ', otp, 'dlya nomera: ', phone);
//                     navigate('/')
//                   })}>
//                     <input type="text" placeholder="Код из Telegram"
//                     {...registerTelegram('otp', {
//                       required: 'Код обязателен',
//                       minLength: {value: 4, message: 'Минимум 4 символа' },
//                     })}/>
//                     {telegramErrors.otp && <p>{telegramErrors.otp.message}</p>}
//                     <button type="submit">Подтвердить</button>
// <button type="button" onClick={() => setAuthWay('initial')}>Назад</button>

//                   </form>
//                 )}
//             </div>
//           )}

//           {authWay === 'email' && (
//             <form onSubmit={handleEmailSubmit((data) => {
//               console.log("email of login: ", data);
//               navigate('/');
//             })}>
              
//               <h2>Email Login</h2>
//               <input type="email"
//               placeholder="Введите почту"
//               {...registerEmail('email', {required: 'Email id required'})}/>
//               {emailErrors.email && <p>{emailErrors.email.message}</p>}
//               <input type="password" placeholder="Введите пароль"
//               {...registerEmail('password', {required: 'Password is required'})}/>
//               {emailErrors.password && <p>{emailErrors.password.message}</p>}
//                     <Link to='' className={styles.link}>
//                 <p>forgot password?</p>
//               </Link>    
//               <div className={styles.log_reg}>
//                 <button type="submit" className={styles.login}>Login</button>
//                 <button className={styles.registration}>
//                   Registration
//                 </button>
//               </div>
             
//             </form>
//           )}
//         </div> 
//       </div>
//     </div>
//   )
// }
//  export default LoginModal;
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './Login.module.scss';
import { useForm } from "react-hook-form";
import axios from '../../api/axiosInstane';

const LoginModal = () => {
  const navigate = useNavigate();

  type AuthWay = 'initial' | 'email' | 'telegram' | 'register';
  type TelegramWay = 'input' | 'otp';

  const [authWay, setAuthWay] = useState<AuthWay>('initial');
  const [telegramWay, setTelegramWay] = useState<TelegramWay>('input');

  const {
    register: registerTelegram,
    handleSubmit: handleTelegramSubmit,
    formState: { errors: telegramErrors },
    setValue: setTelegramValue,
    getValues: getTelegramValues,
  } = useForm();

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm();

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm();

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);


  const sendPhoneNumber = async (phone: string) => {
    try {
      const res = await axios.post("telegram/send-code/", { phone_number: phone });
      console.log("Код отправлен!", res.data);
      setTelegramWay("otp");
    } catch (err: any) {
      console.error("Ошибка при отправке номера:", err.response?.data || err.message);
    }
  };


  const verifyOTP = async (phone: string, otp: string) => {
    try {
      const res = await axios.post("telegram/verify-code/", {
        phone_number: phone,
        code: otp,
      });
      console.log("Успешная авторизация:", res.data);
      navigate("/");
    } catch (err: any) {

      console.error("Ошибка при проверке кода:", err.response?.data || err.message);
    }
  };

  return (
    <div className={styles.drop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close_btn}>
          {/* <button type="button" onClick={() => setAuthWay('initial')}>back</button> */}
          <button className={styles.close} onClick={handleClose}>
            &times;
          </button>
        </div>
   
        <div className={styles.container_lay2}>
                 <div className={styles.login}>
            Вход
          </div>
        
       
              {authWay === 'initial' && (
                <div className={styles.authOptions}>
                  <button onClick={() => setAuthWay('telegram')}>Войти через Telegram</button>
                  <button onClick={() => setAuthWay('email')}>Войти через почту</button>
                  <button onClick={() => setAuthWay('register')}>Пройти регистрацию</button>
                </div>
              )}
            
          {authWay === 'telegram' && (
            <div className={styles.telegramLogin}>
              {telegramWay === 'input' && (
                <form onSubmit={handleTelegramSubmit(({ phone }) => sendPhoneNumber(phone))}>
                  <h2>Login by Telegram</h2>
                  <input type="tel" placeholder="Номер Telegram"
                    {...registerTelegram('phone', {
                      required: "Номер обязателен",
                      pattern: {
                        value: /^\+?[0-9]{10,15}$/,
                        message: "Некорректный номер",
                      },
                    })}
                  />
                  {telegramErrors.phone && <p>{telegramErrors.phone.message}</p>}
                  <button type="submit">Отправить код</button>
                </form>
              )}

              {telegramWay === 'otp' && (
                <form onSubmit={handleTelegramSubmit(({ otp }) => {
                  const phone = getTelegramValues('phone');
                  verifyOTP(phone, otp);
                })}>
                  <input type="text" placeholder="Код из Telegram"
                    {...registerTelegram('otp', {
                      required: 'Код обязателен',
                      minLength: { value: 4, message: 'Минимум 4 символа' },
                    })}
                  />
                  {telegramErrors.otp && <p>{telegramErrors.otp.message}</p>}
                  <button type="submit">Подтвердить</button>
                  <button type="button" onClick={() => setTelegramWay('input')}>Назад</button>
                </form>
              )}
            </div>
          )}

          {authWay === 'email' && (
            <form onSubmit={handleEmailSubmit((data) => {
              console.log("email of login: ", data);
              navigate('/');
            })}>

              <h2>Email Login</h2>
              <input type="email"
                placeholder="Введите почту"
                {...registerEmail('email', { required: 'Email обязателен' })}
              />
              {emailErrors.email && <p>{emailErrors.email.message}</p>}

              <input type="password"
                placeholder="Введите пароль"
                {...registerEmail('password', { required: 'Пароль обязателен' })}
              />
              {emailErrors.password && <p>{emailErrors.password.message}</p>}

              <Link to='' className={styles.link}><p>forgot password?</p></Link>

              <div className={styles.log_reg}>
                <button type="submit" className={styles.login}>Login</button>
                <button className={styles.registration}>Registration</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
