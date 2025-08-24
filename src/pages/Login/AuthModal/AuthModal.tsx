import { useState } from 'react'
import LoginModal from '../Login'
import RegisterModal from '../RegisterModal' // ← импортим реально
import AuthInitial from '../AuthInitial/AuthInital' // ← фикс пути/имени
import RegisterForm from '../Regsiter/RegisterForm'// ← фикс Regsiter→Register

const AuthModals = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [authWay, setAuthWay] = useState<'telegram' | 'email' | null>(null)

  return (
    <>
      <button onClick={() => setIsLoginOpen(true)}>Войти</button>

      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <AuthInitial
          setAuthWay={setAuthWay}
          onOpenRegister={() => {
            setIsLoginOpen(false)
            setIsRegisterOpen(true)
          }}
        />
        {/* тут можно условно рендерить EmailLoginForm/TelegramLoginForm по authWay */}
      </LoginModal>

      <RegisterModal
        open={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      >
        <RegisterForm onClose={() => setIsRegisterOpen(false)} />
      </RegisterModal>
    </>
  )
}

export default AuthModals
