import React, {useState} from "react";
import styles from'./Switcher.module.scss'
const Switcher = () => {
    const [lang, setLang] = useState<'ru' | 'en'>('ru');

    const toggleLang = () => {
        const updLang = lang === 'ru' ? 'en' : 'ru';
        setLang(updLang);
        console.log("Switched to: ", updLang);

    };
        return (
            <div className={styles.switcher}>
                <div className={`${styles.inner_switch} ${styles[lang]}`}
                onClick={toggleLang}>
                    <div className={styles.slider}>{lang ===  'ru' ? 'RU' : 'EN'}</div>
                </div>
          </div>
          
        )

}

export default Switcher;
