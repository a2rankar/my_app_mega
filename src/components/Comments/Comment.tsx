import React from "react";
import styles from './Comment.module.scss'


const Comment: React.FC = () => {

    return( 
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.p_com}>Отзывы</p>
                <button className={styles.btn_com}>
                    <p>Оставить свой отзыв</p>
                </button>
            </div>

            <div className={styles.cont_2}>
                <div className={styles.comment}>
                    <div className={styles.card}>
                        <div className={styles.head}>
                            <p className={styles.name}>Tahmina</p>
                        </div>
                        <div className={styles.main}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.card}>
                        <div className={styles.head}>
                        <p className={styles.name}>Tahmina</p>
                        </div>
                        <div className={styles.main}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.card}>
                        <div className={styles.head}>
                        <p className={styles.name}>Tahmina</p>
                        </div>
                        <div className={styles.main}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
                    <div className={styles.card}>
                        <div className={styles.head}>
                        <p className={styles.name}>Tahmina</p>
                        </div>
                        <div className={styles.main}>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
            </div>            
            
      
        </div>
    )
}
export default Comment;