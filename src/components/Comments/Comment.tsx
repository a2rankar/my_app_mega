import React, {useState} from "react";
import styles from './Comment.module.scss';
import Ellipse from '../../assets/Ellipse 1.svg'
import Ellipse2 from '../../assets/Ellipse 2.svg'
import Ellipse3 from '../../assets/Ellipse 3.svg'
import star from '../../assets/star.png'
function Comment () {
    return (
        <div className={styles.fullBlog}>
            <div className={styles.container}>
                <img src={Ellipse}/>
                    <div className={styles.blog}>
                        <p>John</p>
                        <div className={styles.info}>
                            <p>5</p>
                            <p>32y</p>
                            <p>3 years of exp</p>
                        </div>
                        <div className={styles.com_blog}>
                            <p>рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу и считает, что это лучшее занятие в мире!<br></br>рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу и считает, что это лучшее занятие в мире!</p>
                        </div>
                    </div>
            </div>        
            <div className={styles.container}>
                <img src={Ellipse2}/>
                <div className={styles.blog}>
                    <p>Ekaterina</p>
                    <div className={styles.info}>
                        <p>5</p>
                        <p>32y</p>
                        <p>3 years of exp</p>
                    </div>
                    <div className={styles.com_blog}>
                        <p>рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу и считает, что это лучшее занятие в мире!<br></br>рофессиональный гид, который проводит экскурсии по Кыргызстану.<br>
                        </br> Любит свою работу и считает, что это лучшее занятие в мире!рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу
                         и считает, что это лучшее занятие в мире!<br></br>рофессиональный гид, который проводит экскурсии по Кыргызстану.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <img src={Ellipse3}/>
                    <div className={styles.blog}>
                        <p>Victor</p>
                        <div className={styles.info}>
                            <div className={styles.rating}>
                            <p>5</p>
                            <img src={star}/>
                            </div>
                        
                            <p>32y</p>
                            <p>3 years of exp</p>
                        </div>
                        <div className={styles.com_blog}>
                            <p>рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу и считает, что это лучшее занятие в мире!<br></br>рофессиональный гид, который проводит экскурсии по Кыргызстану. Любит свою работу и считает, что это лучшее занятие в мире!</p>
                        </div>
                    </div>
            </div>         
        
        </div>

        
    )
}
export default Comment;
