import React, { useEffect, useState } from "react";
import image2 from '../../assets/image2.svg';
import image4 from '../../assets/image 4.svg'
import styles from './Card.module.scss';

const CardData = [
    {
      id: 1,
      image: image2,
      title: "Jety-Ogyz",
      rating: 4.7,
      duration: "3 days",
      price: "5000 som",
      date: "date of out",
      placesLeft: 63,
    },
    {
      id: 2,
      image: image4,
      title: "Jety-Ogyz",
      rating: 4.7,
      duration: "31 days",
      price: "5000 som",
      date: "date of out",
      placesLeft: 64,
    },
    {
    id: 3,
    image: image2,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "30 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 65,
  },
  {
    id: 4,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 66,
  },
  {
    id: 5,
    image: image4,
    title: "Skazka",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 67,
  },
  {
    id: 6,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 68,
  },{
    id: 7,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 69,
  },
  ];
  
const Card = () => {
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        setCards(CardData);
    }, []); 



    return (
    <div className={styles.fullBlog}>
            {cards.map((card) => (
                <div className={styles.container} key={card.id}>
                    <div className={styles.imgHover}>
                        <img src={card.image} alt="logo"/>
                        <div className={styles.hoverOverlay}>Забронировать</div>
                    </div>    
                    <div className={styles.description}>
                            <div className={styles.first_row}>
                                <p>{card.title}</p>
                                <p>{card.rating}</p>
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