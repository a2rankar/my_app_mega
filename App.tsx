import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Tours from './src/pages/Tours'
import ToursDetail from './src/pages/toursDetail';
import Profile from './src/pages/Profile';
import './App.css'
import Switcher from './src/components/Switcher';
import Card from './src/components/Cards/Card';
import React from 'react';

function App() {
  return (
      <Routes>
        <Route path='/card' element={<Card />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

  )
}

export default App
