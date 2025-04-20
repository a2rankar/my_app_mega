import React from "react";
import './Header.scss'
import Switcher from "./Switcher/Switcher";
import search from '../../assets/search.png';
function Header() {
    return (
        <div className="container">
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <div className="hd-puncts">
                <h3>Главная</h3>
                <h3>Главная</h3>
                <h3>Главная</h3>
                <h3>Главная</h3>
            </div>
            <div className="search">
                <div className="input_search">
                    <input type="text" placeholder="vndfj"/>
                    <img src={search} alt="logo"/>
                </div>
                
                <Switcher/>
            </div>

        </div>
    )
}
export default Header;
