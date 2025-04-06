import { Link } from 'react-router-dom'
import React from 'react';
import "../Styles/Home.scss";
import Header from '../components/Header';
import Card from '../components/card';

function Home() {
  return (
    <>

      <div className='cont'>
        <Header/>
      </div>

      <div className='content'>
        <h2>The best tours</h2>
        <h2>One day tours</h2>
        <div className='card-page'>
          <Card />
        </div>
      </div>
  
    </>
  )
}

export default Home
