import React from "react";
import styles from './Footer.module.scss';
import facebook from '../../assets/facebook.svg';
import Vector from '../../assets/Vector.svg'
import Call from '../../assets/Call.png'
import Group from '../../assets/Group.png'
import email from '../../assets/email.png'

const Footer : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                      <div className={styles.logo}>
                        <p>LOGO</p>
                    </div>
                <div className={styles.toLeft}>
              
                    <div className={styles.puncts}>
                        <p>Главная</p>
                        <p>О компании</p>
                        <p>Туры</p>
                        <p>Контакты</p>
                        <p>Гиды</p>
                        <p>Отзывы</p>
                    </div>
                    <div className={styles.soc_net}>
                        <div className={styles.soc_net2}>
                            <img src={facebook}/>
                            <p>takhminam</p>
                        </div>
                        <div className={styles.soc_net2}>
                            <img src={Group}/>
                            <p>@takhminam</p>
                        </div>
                        <div className={styles.soc_net2}>
                            <img src={email}/>
                            <p>takhminam@email.com</p>
                        </div>
                    </div>
                 </div>

                <div className={styles.info}>
                    <div className={styles.address}>
                        <img src={Vector}/>
                        <p>
                            ул. Тыныстанова<br/>
                            БЦ “Бизнес Центр”<br/>
                            3-й этаж, офис 5
                        </p>
                    </div>
                    <div className={styles.call}>
                        <img src={Call}/>
                        <p>
                            +996 701154466
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;