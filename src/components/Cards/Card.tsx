import React from "react";
import image2 from '../../assets/image2.svg';
import styles from './Card.module.scss';

function Card () {
    return (
        <div className={styles.container}>
            <img src={image2} alt="logo"/>
            <div className={styles.description}>
                    <div className={styles.first_row}>
                        <p>Jety-Ogyz</p>
                        <p>4.7</p>
                    </div>
                <div className={styles.paragraf}> 
                    <p>3 days</p>
                    <p>5000 som</p>
                    <p>date of out</p>
                    <p>left places: 6</p>
                </div> 
            </div>
        </div>
    );
}

export default Card;