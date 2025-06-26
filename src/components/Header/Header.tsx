import React, {useState} from "react";
import styles from './Header.module.scss'
import Switcher from "./Switcher/Switcher";
import search from '../../assets/search.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import menu_panel from '../../assets/bi_people-circle.svg';
import arrow from '../../assets/arrow down.svg';
import LoginModal from "../../pages/Login/Login";


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

   
        
    const navigate = useNavigate();
    const location = useLocation();
    const tourPage = location.pathname.startsWith('/tours');
    const toggleMenu = () => setIsOpen(!isOpen);

//     const handleLoginClick = () => {
//         navigate("/login");
// };
 const handleLoginClick = () => {
    navigate('/login', { state: { backgroundLocation: location } });
  };
     
    return (
 
        <div className={`${styles.container} ${tourPage ? styles.back : '' }`}>
          
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
                <Link to='/' className={styles.link}>            
                    <p>Контакты</p>
                </Link>


                    <div  className={styles.menu2}   onClick={() => {
                        handleLoginClick();
                        toggleMenu();
                    }} style={{display: 'flex', alignItems: 'center',   cursor: 'pointer'}}
                   >
                        <img src={menu_panel}/>
                        <img src={arrow} style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        marginLeft: '8px'
                        }}/>
                    </div>

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
