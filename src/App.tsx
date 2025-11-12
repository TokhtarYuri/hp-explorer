import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { ThemeProvider } from './context/ThemeContext';
import CharactersPage from './pages/Characters/CharactersPage';
import SpellsPage from './pages/Spells/SpellsPage';
import './styles/themes.css';
import './App.css';
import CharacterDetailsPage from './pages/CharacterDetails/CharacterDetailsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<CharactersPage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/characters/:id" element={<CharacterDetailsPage />} />
              <Route path="/spells" element={<SpellsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
