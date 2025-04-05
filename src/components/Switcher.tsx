import React, {useState} from "react";
import '../Styles/Switchercase.scss'
const Switcher = () => {
    const [lang, setLang] = useState<'ru' | 'en'>('ru');

    const toggleLang = () => {
        const updLang = lang === 'ru' ? 'en' : 'ru';
        setLang(updLang);
        console.log("Switched to: ", updLang);
        console.log("CURRENT LANG:", lang);

    };
        return (
            <div className="switcher">
                <div className={`inner-switch ${lang}`} onClick={toggleLang}>
                    <div className="desc">ru</div>
                    <div className="desc">en</div>
                    <div className="slider" />
                    <p>{lang}123</p>
                </div>
          </div>
          
        )

}

export default Switcher;