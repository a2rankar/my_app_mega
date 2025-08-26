import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import menu_panel from '../../assets/bi_people-circle.svg'
import arrow from '../../assets/arrow down.svg'
import search from '../../assets/search.png'
import Switcher from './Switcher/Switcher'
import main from '../../assets/main_logo.svg'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    setIsAuthenticated(!!userId)
  }, [userId])

  const handleLogout = () => {
    localStorage.removeItem('userId')
    setIsAuthenticated(false)
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login', { state: { backgroundLocation: location } })
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div
      className={`${styles.container} ${location.pathname.startsWith('/tours') ? styles.back : ''}`}
    >
      <div className={styles.hd_puncts}>
        <Link to="/" className={styles.main}>
          <img src={main} />
        </Link>
        <Link to="/" className={styles.link}>
          <p>{t('header.home')}</p>
        </Link>
        <Link to="/tours" className={styles.link}>
          <p>{t('header.tours')}</p>
        </Link>
        <Link to="/" className={styles.link}>
          <p>{t('header.contacts')}</p>
        </Link>
      </div>

      <div
        className={styles.menu2}
        onClick={() => {
          isAuthenticated ? toggleMenu() : handleLoginClick()
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginLeft: 'auto',
        }}
      >
        <img src={menu_panel} />
        <div
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            marginLeft: '8px',
            display: 'inline-block',
          }}
        >
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={`${styles.dropdown} ${isOpen ? styles.show : ''}`}>
        {isAuthenticated && (
          <div className={styles.dropdownScope}>
            <Link to={`/profile/${userId}`} className={styles.dropdownItem}>
              Профиль
            </Link>
            <Link to="/my-tours" className={styles.dropdownItem}>
              Мои туры
            </Link>
            <Link to="/favorites" className={styles.dropdownItem}>
              Избранное
            </Link>
            <button onClick={handleLogout} className={styles.dropdownItem}>
              Выйти
            </button>
          </div>
        )}
      </div>

      <div className={styles.search}>
        <div className={styles.input_search}>
          <input type="text" />
          <img src={search} alt="logo" />
        </div>
        <Switcher />
      </div>
    </div>
  )
}

export default Header
