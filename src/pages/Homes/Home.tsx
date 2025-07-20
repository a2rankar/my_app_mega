import { Link } from 'react-router-dom'
import React from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Cards/Card';
import Gids from '../../components/Gids/Gids';
import Comment from '../../components/Comments/Comment';
import InTouch from '../../components/Connect/InTouch';
import Footer from '../../components/Footer/Footer';
import { useCardData} from '../../api/data/cardData'

const Home: React.FC = () => {
  const data = useCardData();
  return (
    <>
      <div className={styles.cont}>
        <Header/>
      </div>
      <div className={styles.content}>

              <div className={styles.content_page}>   
                  <button className={styles.left}>
                     best
                  </button>
                  <button className={styles.right}>
                    all
                  </button>
              </div>    
              <div className={styles.card_page}>
                <Card data={data}/> 
              </div>
              <Link to=''>
                <button className={styles.tour_btn}><p>Watch all tours</p></button>
              </Link>
        
            <div className={styles.gids}>
              <Gids/>
            </div> 
                <Link to='/'>
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
