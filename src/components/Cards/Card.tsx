import React, { useEffect, useState } from "react";
import styles from './Card.module.scss';
import type { CardItem } from '../../api/data/cardData'

  

    // const [cards, setCards] = useState<CardItem[]>([]);

    // useEffect(() => {
    //     setCards(CardData);
    // }, []); 

    interface CardProps {
        data: CardItem[];


    }
    const Card: React.FC<CardProps> = ({data}) => {

    
    return (
    <div className={styles.fullBlog}>
            {data.map((card) => (
                <div className={styles.container} key={card.id}>
                    <div className={styles.imgHover}>
                        <img src={card.image} alt="logo"/>
                        <div className={styles.hoverOverlay}>Забронировать</div>
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
                                <p>{card.duration}</p>
                                <p>{card.price}</p>
                                <p>{card.date}</p>
                                <p>Left places: {card.placesLeft}</p>
                            </div> 
                    </div>
                </div>
            ))}
    </div>    
    );
}

export default Card;