import React, {useState} from "react";
import './Switcher.scss'
const Switcher = () => {
    const [lang, setLang] = useState<'ru' | 'en'>('ru');

    const toggleLang = () => {
        const updLang = lang === 'ru' ? 'en' : 'ru';
        setLang(updLang);
        console.log("Switched to: ", updLang);

    };
        return (
            <div className="switcher">
                <div className={`inner-switch ${lang}`} onClick={toggleLang}>
                    <div className="slider">{lang ===  'ru' ? 'RU' : 'EN'}</div>
            
                </div>
          </div>
          
        )

}

export default Switcher;