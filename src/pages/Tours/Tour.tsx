import React, {useEffect, useState} from 'react';
import Card from '../../components/Cards/Card';
import Footer from '../../components/Footer/Footer';
import styles from './Tour.module.scss';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { CardItem, useCardData } from '../../api/data/cardData';


const options = [
'One day',
'Long time',
'Gid',
'with camp',
'Big group',
'Small group',
'easy tour',
'medium',
'difficult',
];



const Tours: React.FC = () => {
  const data = useCardData();
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<CardItem[]>(data);


  useEffect(() => {
    setFilteredData(data);
  }, [data]);


            const filtering = () => {
              const result = checkedFilters.length === 0 
                ? data : data.filter((card) => 
                    checkedFilters.some((filter) => {
                      switch(filter) {
                        case 'One day' : 
                          return card.duration === 1;
                        case 'Long time' : 
                          return card.duration > 1;
                        case 'Small group' : 
                          return card.place < 5;
                        case 'Big group' : 
                          return card.place > 5;
                        case 'easy' : 
                          return card.level === 'easy';
                        case 'medium' :
                          return card.level === 'medium';
                        case 'difficult' :
                          return card.level === 'difficult';
                          case 'Gid':
                            return card.gid === true; 
                          case 'with camp':
                            return card.camp === true; 
                  
                        default:
                          return false;

                      }
                    })    
                  );
                  setFilteredData(result);
            };

            const reset = () => {
              setCheckedFilters([]);
              setFilteredData(data);
            }

          
          // console.log("Filtered data:", filtered);

          const toggleFilter = (filter: string) => {
            setCheckedFilters((prev) =>
              prev.includes(filter)
                ? prev.filter((item) => item !== filter)
                : [...prev, filter]
            );
          }
          


  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <Header/>
      </div>
      <div className={styles.container_low2}>
          <div className={styles.main}>
            <div className={styles.barside}>
                <div className={styles.tours_map}>
                 <strong>

                    <p className={styles.Tours}>Tours</p>
                 </strong>
    
        
                    <p>All tours</p>
                    <p>The best tours</p>
                    <p>Individual Tours</p>
                </div>
                  <div className={styles.filter}>
                      {/* <div className={styles.map_filter}> */}
                        <div className={styles.arrow}>
                          <button className={styles.region}><p>Regions</p></button>
                          <div className={styles.arrow_img}></div>
                        </div>
                          {options.map((option) => (
                      
                            <label key={option} className={styles.checkbox}>
                              <input type='checkbox' 
                              checked={checkedFilters.includes(option)}
                              onChange={() => toggleFilter(option)} />
                              {option}
                            </label>  
                          ))}
                            <button className={styles.filter_btn} onClick={filtering}>
                              Primenit
                            </button>
                            <button className={styles.reset_btn} onClick={reset}>
                              Sbrosit
                            </button>
                      {/* </div> */}
                  </div>
            </div>
              <div className={styles.Card}>
                <Card data={filteredData}/>
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
