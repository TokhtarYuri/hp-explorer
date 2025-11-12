import React, { useState, useEffect } from 'react';
import SpellCard from '../../components/SpellCard/SpellCard';
import { fetchSpells } from '../../api/hpApi';
import { useFetch } from '../../hooks/useFetch';
import './SpellsPage.css';

type Spell = {
  id: string;
  name: string;
  description: string;
};

const LOCAL_STORAGE_KEY = 'spells-current-page';

const SpellsPage: React.FC = () => {
  const { data: spells, loading, error } = useFetch<Spell[]>(fetchSpells);

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 1;
  });

  const perPage = 18;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, currentPage.toString());
  }, [currentPage]);

  if (loading) return <p className="loader">Loading spells...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!spells || spells.length === 0) return <p className="error">No spells found</p>;

  const totalPages = Math.ceil(spells.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentItems = spells.slice(startIndex, startIndex + perPage);

  return (
    <div className="spells-page">
      <h2>Spells</h2>
      <div className="spells-grid">
        {currentItems.map(spell => (
          <SpellCard key={spell.id} spell={spell} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default SpellsPage;
