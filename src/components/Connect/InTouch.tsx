import React from "react";
import styles from './InTouch.module.scss'


const InTouch: React.FC = () => {
    return (
        <div className={styles.loyerup}>
            <div className={styles.container}>
                <div className={styles.sentence}>
                    <p className={styles.upper}>
                        Необходимо связаться с Вами?
                    </p>
                    <p className={styles.low}>
                    Оставьте свои контакты
                    </p>
                </div>
                <form className={styles.form}>
                    <div className={styles.f_group}>
                        <input type="text" name="FIO" placeholder="Фамилия и имя"/>
                        <input type="tel" name="tel" placeholder="Номер телефона"/>
                        <input type="email" name="email" placeholder="Эл. почта "/>
                        <textarea name="comment" placeholder="Комментарий: Свяжитесь со мной">
                        </textarea>
                    </div> <div className={styles.send_btn}> 
                            <button>Send</button> 
                    </div>
                </form>
            </div>
        </div>
    )

}
export default InTouch;

