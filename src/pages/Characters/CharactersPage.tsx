import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { fetchCharacters } from '../../api/hpApi';
import { useFetch } from '../../hooks/useFetch';
import './CharactersPage.css';
import { useTranslation } from 'react-i18next';

type Character = {
  id: string;
  name: string;
  house?: string;
  image?: string;
};

const LOCAL_STORAGE_KEY = 'characters-current-page';

const CharactersPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: characters, loading, error } = useFetch<Character[]>(fetchCharacters);

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 1;
  });

  const [perPage, setPerPage] = useState(16);
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth <= 768) {
        setPerPage(12);
        const totalPages = Math.ceil((characters?.length || 0) / 12);
        if (currentPage > totalPages) setCurrentPage(1);
        return;
      }

      const containerWidth = window.innerWidth - 240;
      const cardMinWidth = 220;
      const gap = 16;
      const columns = Math.floor(containerWidth / (cardMinWidth + gap));
      const rows = 2;
      const newPerPage = Math.max(columns * rows, 2);
      setPerPage(newPerPage);

      const totalPages = Math.ceil((characters?.length || 0) / newPerPage);
      if (currentPage > totalPages) setCurrentPage(1);
    };

    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, [characters, currentPage]);

  if (loading) return <p className="loader">{t('loading_characters')}</p>;
  if (error) return <p className="error">{t('error_loading')}</p>;
  if (!characters) return <p className="error">{t('no_characters_found')}</p>;

  const totalPages = Math.ceil(characters.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentItems = characters.slice(startIndex, startIndex + perPage);

  return (
    <div className="characters-page">
      <h2>{t('characters')}</h2>
      <div className="characters-grid">
        {currentItems.map(c => (
          <div
            key={c.id}
            onClick={() => navigate(`/characters/${c.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <CharacterCard character={c} />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          {t('prev')}
        </button>
        <span>
          {t('page')} {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default CharactersPage;
