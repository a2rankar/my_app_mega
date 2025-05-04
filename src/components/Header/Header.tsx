import React from "react";
import styles from './Header.module.scss'
import Switcher from "./Switcher/Switcher";
import search from '../../assets/search.png';
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <p>LOGO</p>
            </div>
            <div className={styles.hd_puncts}>
                <p>Главная</p>
                <Link to="/tours" className={styles.link}>
                    <p>Туры</p>
                </Link>
                <p>Контакты</p>
                <p>Вход</p>
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
