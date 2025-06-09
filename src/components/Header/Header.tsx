import React from "react";
import styles from './Header.module.scss'
import Switcher from "./Switcher/Switcher";
import search from '../../assets/search.png';
import { Link } from "react-router-dom";
import menu_panel from '../../assets/bi_people-circle.svg';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
          
            <div className={styles.hd_puncts}>
                <div className={styles.logo}>
                    <Link to='/'  className={styles.link}>           
                        <p>LOGO</p>
                    </Link>
                </div>
                    <Link to='/'  className={styles.link}> 
                    <p>Главная</p>
                    </Link>
                <Link to="/tours" className={styles.link}>
                    <p>Туры</p>
                </Link>

                <p>Контакты</p>
                <img src={menu_panel}/>
            </div>
            <div className={styles.search}>
                <div className={styles.input_search}>
                    <input type='text'/>
                    <img src={search} alt="logo"/>
                </div>

                <Switcher/>
            </div>

        </div>
    )
}
export default Header;
