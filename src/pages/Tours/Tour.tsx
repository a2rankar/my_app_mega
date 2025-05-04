import React, {useState} from 'react';
import Card from '../../components/Cards/Card';
import { CardData } from '../../api/data/cardData';
import Footer from '../../components/Footer/Footer';
import styles from './Tour.module.scss'
import { Link } from 'react-router-dom';


const options = [
'One day',
'Long time',
'Gid',
'with camp',
'big group',
'small group',
'easy tour',
'medium',
'hard',
];



const Tours: React.FC = () => {
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const toggleFilter = (filter: string) => {
    setCheckedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.Card}>
            <Card data={CardData} />
        </div>
        <div className={styles.barside}>
            <div className={styles.tours_map}>
              <Link to='/'>
              <p>Tours</p>
              </Link>
              <p>All tours</p>
              <p>The best tours</p>
              <p>Individual Tours</p>
            </div>
            <div className={styles.filter}>
              <button>Regions</button>
              <div className={styles.map_filter}>
                {options.map((option) => (
                  <label key={option} className={styles.checkbox}>
                    <input type='checkbox' 
                    checked={checkedFilters.includes(option)}
                    onChange={() => toggleFilter(option)} />
                  </label>
                ))}
                    <button className={styles.filter_btn}>
                      Primenit
                    </button>
                    <button className={styles.reset_btn}>
                      Sbrosit
                    </button>
              </div>
            </div>
        </div>
      </div>
       

          <div className={styles.footer}>
              <Footer/>
          </div>
    </div>
  );
};

export default Tours;
