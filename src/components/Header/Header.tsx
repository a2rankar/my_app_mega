import React from "react";
import './Header.scss'
import Switcher from "./Switcher/Switcher";
import search from '../../assets/search.png';
const Header: React.FC = () => {
    return (
        <div className="container">
            <div className="logo">
                <p>LOGO</p>
            </div>
            <div className="hd-puncts">
                <p>Главная</p>
                <p>Туры</p>
                <p>Контакты</p>
                <p>Вход</p>
            </div>
            <div className="search">
                <div className="input_search">
                    <input type="text"/>
                    <img src={search} alt="logo"/>
                </div>
                
                <Switcher/>
            </div>

        </div>
    )
}
export default Header;
