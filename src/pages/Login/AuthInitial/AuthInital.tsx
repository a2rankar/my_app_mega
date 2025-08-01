const AuthInitial = ({ setAuthWay }) => (
  <div>
    <h2>Вход</h2>
    <button onClick={() => setAuthWay('telegram')}>Войти через Telegram</button>
    <button onClick={() => setAuthWay('email')}>Войти через почту</button>
    <button onClick={() => setAuthWay('register')}>Пройти регистрацию</button>
  </div>
)

export default AuthInitial
