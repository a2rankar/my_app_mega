import React from "react";
import styles from './Comment.module.scss'


const Comment = () => {

    return( 
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.p_com}>Отзывы</p>
                <button className={styles.btn_com}>
                    <p>Оставить свой отзыв</p>
                </button>
            </div>
        </div>
    )
}
export default Comment;