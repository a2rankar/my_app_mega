import { Link } from 'react-router-dom'
import React from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header'
import Card from '../../components/Cards/Card';

function Home() {
  return (
    <>
      <div className={styles.cont}>
        <Header/>
      </div>
      <div className={styles.content}>
            <div className={styles.content_page}>     
                <p>The best tours</p>       
                <p>One day tours</p>
            </div>    
            <div className={styles.card_page}>
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
