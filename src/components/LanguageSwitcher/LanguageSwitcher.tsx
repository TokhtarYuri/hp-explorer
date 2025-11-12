import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css';
import i18n from 'i18next';

interface LanguageSwitcherProps {
  theme: 'light' | 'magic';
}

const LANG_KEY = 'hp-language';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ theme }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem(LANG_KEY) || 'en';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ua' : 'en';
    setLanguage(newLang);
    localStorage.setItem(LANG_KEY, newLang);
    i18n.changeLanguage(newLang); 
  };
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={`language-switcher ${theme}`}>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'EN' : 'UA'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
