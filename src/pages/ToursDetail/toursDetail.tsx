import { useParams } from 'react-router-dom';
import { mockData } from '../../api/data/cardData';
import styles from './toursDetail.module.scss';
import Header from '../../components/Header/Header';
import {ReactCalendar} from '../../components/Calendar/React_Calendar';

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
        <div className={styles.title}>
            <p>{tour.title}</p>
            {tour.rating}
        </div>
        <div className={styles.calendar}>
            <div className={styles.left_side}>
                <p>Near date of out</p>
                <button className={styles.book_btn}>Book</button>
            </div>
            <div className={styles.right_side}>
                <ReactCalendar/>
            </div>
        </div>
                
    </div>
  )
}

export default ToursDetail
