import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const clearPagination = () => {
    localStorage.setItem('characters-current-page', '1');
    localStorage.setItem('spells-current-page', '1');
  };

  return (
    <>
      <aside className={`sidebar ${theme}`}>
        <div className="logo-block">
          <a href="/" className="logo-link" onClick={clearPagination}>
            <div className="logo-text">Harry Potter Explorer</div>
            <img src="/logo.png" alt="Harry Potter logo" className="logo-img" />
          </a>
          <div className="nav-links">
            <nav>
              <a href="/characters" onClick={clearPagination}>Characters</a>
              <a href="/spells" onClick={clearPagination}>Spells</a>
            </nav>
          </div>
        </div>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? 'Magic Mode' : 'Light Mode'}
        </button>
      </aside>

      <header className={`mobile-header ${theme}`}>
        <a href="/" className="logo-link">
          <div className="logo">Harry Potter Explorer</div>
        </a>
        <button className="burger-btn" onClick={handleToggle}>☰</button>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''} ${theme}`}>
        <div className="mobile-logo-block">
          <div className="logo-text">Harry Potter Explorer</div>
          <img src="/logo.png" alt="Harry Potter logo" className="logo-img" />
        </div>


        <nav>
          <a href="/characters" onClick={() => { clearPagination(); setOpen(false); }}>Characters</a>
          <a href="/spells" onClick={() => { clearPagination(); setOpen(false); }}>Spells</a>
        </nav>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? 'Magic Mode' : 'Light Mode'}
        </button>

        <button className="close-btn" onClick={handleToggle}>✕</button>
      </div>
    </>
  );
};

export default Sidebar;
