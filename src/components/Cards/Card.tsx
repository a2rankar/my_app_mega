import React, { useEffect, useState } from "react";
import styles from './Card.module.scss';
import { CardItem, mockData, useCardData} from '../../api/data/cardData'
import {Link} from 'react-router-dom';


    interface CardProps {
        data: CardItem[];

    }

    const Card: React.FC<CardProps> = ({data}) => {
        // const data = useCardData();
    
        return (
            <div className={styles.fullBlog}>
                {/* {data.length === 0 ? (
                    <p>No looking tours</p>
                    ) : ( */}
                            
                            {data.map((card) => (
                                <div className={styles.container} key={card.id}>
                                    <div className={styles.imgHover}>
                                        <img src={card.image} alt="logo"/>
                                        <div className={styles.hoverOverlay}>
                                            <Link to={`/tours/${card.id}`} className={styles.book}>Book</Link>
                                        </div>
                                    </div>    
                                    <div className={styles.description}>
                                            <div className={styles.first_row}>
                                                <p>{card.title}</p>
                                                <div className={styles.rate}>
                                                    <p>{card.rating}</p>
                                                    <div className={styles.rating}></div>    
                                                </div>
                                            </div>
                                            <div className={styles.paragraf}> 
                                                <p>{card.duration} days</p>
                                                <p>{card.price}</p>
                                                <p>{card.date}</p>
                                                <p>Left places: {card.place}</p>
                                
                                            </div> 
                                    </div>
                                </div>
                        
                                    )
                            )
                            } 
     



            </div>   
        )

    }



export default Card;