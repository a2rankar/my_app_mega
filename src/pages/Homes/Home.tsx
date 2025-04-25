import { Link } from 'react-router-dom'
import React from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Cards/Card';
import Gids from '../../components/Gids/Gids';
import Comment from '../../components/Comments/Comment';
import InTouch from '../../components/Connect/InTouch';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.cont}>
        <Header/>
      </div>
      <div className={styles.content}>
            <div className={styles.content_page}>     
                <p className={styles.left}>The best tours</p>       
                <p className={styles.right}>One day tours</p>
            </div>    
            <div className={styles.card_page}>
              <Card /> 
            </div>
            <Link to=''>
              <button><p>Watch all tours</p></button>
            </Link>
            <div className={styles.gids}>
              <Gids/>
            </div> 
                <Link to=''>
                  <button className={styles.btn_gid}><p>All gids</p></button>
                </Link>
                <div className={styles.comment}>
                  <Comment/>
                </div>
                <div className={styles.in}>
                  <InTouch/>
                </div>
                <div className='footer'>
                  <Footer/>
                </div>
      </div>
    </>
  )
}

export default Home
