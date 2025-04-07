import React from "react";
import image2 from '../../assets/image2.svg';
import styles from './Card.module.scss';

function Card () {
    return (
        <div className={styles.container}>
            <img src={image2} alt="logo"/>
                <div className="first-row">
                    <h2>Jety-Ogyz</h2>
                    <p>4.7</p>
                </div>
            <p>3 days</p>
            <p>5000 som</p>
            <p>date of out</p>
            <p>left places: 6</p>
        </div>
    );
}

export default Card;