import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Home from './src/pages/Homes/Home'
import LoginModal from './src/pages/Login/Login'
import Registration from './src/pages/Registration/Registration'
import Tour from './src/pages/Tours/Tour'
import ToursDetail from './src/pages/ToursDetail/toursDetail'
import { TheBestTours } from './src/components/TheBest'
import Comment from './src/components/Gids/Gids'
import Profile from './src/pages/Profile/Profile'
import GeneralInfo from './src/components/GeneralInfoPage/GeneralInfo'
import Favorite from './src/pages/Favorite/Favorite'
import './i18n'
import './App.css'

const App = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }
  const background = state?.backgroundLocation
  return (
    <>
      <Routes location={background || location}>
        <Route path="/comment" element={<Comment />} />
        <Route path="/" element={<Home />} />
        <Route path="tours/:id" element={<ToursDetail />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/tour/:id" element={<ToursDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/thebest" element={<TheBestTours />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {location.pathname === '/login' && <LoginModal />}
    </>
  )
}

export default App
