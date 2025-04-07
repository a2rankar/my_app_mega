import { Link } from 'react-router-dom'
import React from 'react';
import "../Styles/Home.scss";
import Header from '../components/Header';
import Card from '../components/Cards/Card';

function Home() {
  return (
    <>

      <div className='cont'>
        <Header/>
      </div>

      <div className='content'>
        <div className='content-page'>
          <h2>The best tours</h2>
          <h2>One day tours</h2>
        </div>
        <div className='card-page'>
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
  
    </>
  )
}

export default Home
