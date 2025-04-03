import React from "react";
import '../Styles/Header.scss'
import Switcher from "./Switcher";
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
                <input/>
                <Switcher/>
            </div>

        </div>
    )
}
export default Header;
