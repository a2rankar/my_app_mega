import React, { useState, useEffect } from "react";
import styles from './Switcher.module.scss'
import { useTranslation } from "react-i18next";

const Switcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<'ru' | 'en'>(() => {
    return (localStorage.getItem('lang') as 'ru' | 'en') || 'ru';
  });

  const toggleLang = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    setLang(newLang);
    i18n.changeLanguage(newLang);         
    localStorage.setItem('lang', newLang); 
  };

  useEffect(() => {
    i18n.changeLanguage(lang); 
  }, []);

  return (
    <div className={styles.switcher}>
      <div
        className={`${styles.inner_switch} ${styles[lang]}`}
        onClick={toggleLang}
      >
        <div className={styles.slider}>
          {lang.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Switcher;
