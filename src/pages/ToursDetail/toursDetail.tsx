import { useParams } from 'react-router-dom';
import { mockData } from '../../api/data/cardData';
import styles from './toursDetail.module.scss';
import Header from '../../components/Header/Header';
import {ReactCalendar} from '../../components/Calendar/React_Calendar';
import icon2 from '../../assets/icons.svg';
// import icon2 from '../../assets/icons2.png';
import icon from '../../assets/icons2.svg';
import Level from '../../assets/Level.svg';

function ToursDetail() {
  const { id } = useParams()
  const tour = mockData.find((t) => t.id === Number(id));

  if (!tour) return
      <div>Tour wasnt found</div>





  return (
    <div className={styles.container}>
        <div className={styles.imgHover}
            style={{backgroundImage: `url(${tour.tours_img})`}}>
                <div className={styles.header}>
                    <Header/>
                </div>
        </div>
        <div className={styles.calendar_loy}>
            <div className={styles.title}>
                <p>{tour.title}</p>
                <div className={styles.rate}>
                    <p>{tour.rating}</p>
                    <div className={styles.rating}></div>    
                </div>
            </div>
            <div className={styles.calendar}>
                    <div className={styles.right_side}>
                        <div className={styles.btnside}>
                            <p>Near date of out</p>
                            <button className={styles.book_btn}><p>Забронировать</p></button>
                        </div>                   
                        <ReactCalendar/>
                    </div>
            </div>
        </div> 
        <div className={styles.description}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\n"<br></br>

                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\n"<br>
                    </br>

                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"\n\n"
                </p>    
        </div> 
        <div className={styles.icons}>
            <div className={styles.first_lay}>
                <div className={styles.point}>
                    <img src={icon}/>
                    <div className={styles.desc}>
                        <p>Точка сбора:</p>
                        <p>{tour.collection_point}</p>
                    </div>
                </div>

                <div className={styles.duration}>
                   <img src={icon2}/>
                   <div className={styles.desc}>
                        <p>Длительность:</p>
                        <p>{tour.duration}</p>
                   </div>    
                </div>

                <div className={styles.level}>
                    <img src={Level}/>
                    <div className={styles.desc}>
                        <p>Сложность:</p>
                        <p>{tour.level}</p>
                    </div>
                </div>         
            </div>
            <div className={styles.second_lay}>
                    <div className={styles.point}>
                    <img src={icon}/>
                    <div className={styles.desc}>
                        <p>Точка сбора:</p>
                        <p>{tour.collection_point}</p>
                    </div>
                </div>

                <div className={styles.duration}>
                   <img src={icon2}/>
                   <div className={styles.desc}>
                        <p>Длительность:</p>
                        <p>{tour.duration}</p>
                   </div>    
                </div>

                <div className={styles.level}>
                    <img src={Level}/>
                    <div className={styles.desc}>
                        <p>Сложность:</p>
                        <p>{tour.level}</p>
                    </div>
                </div>     
            </div>
        </div>  
    </div>
  )
}

export default ToursDetail
