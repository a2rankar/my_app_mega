import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Homes/Home';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Tour from './src/pages/Tours/Tour'
import ToursDetail from './src/pages/ToursDetail/toursDetail';
import Profile from './src/pages/Profile';
import Comment from './src/components/Gids/Gids';
import './App.css'
import Switcher from './src/components/Header/Switcher/Switcher';
import Card from './src/components/Cards/Card';
import React from 'react';

const App = () =>  {
  return (
      <Routes>
        <Route path='/comment' element={<Comment />}/>
        <Route path="/" element={<Home />} />
        <Route path='tours/:id' element={<ToursDetail/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/tour/:id" element={<ToursDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

  )
}

export default App
