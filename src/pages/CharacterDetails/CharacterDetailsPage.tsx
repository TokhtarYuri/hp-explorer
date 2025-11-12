import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCharacters } from '../../api/hpApi';
import { useFetch } from '../../hooks/useFetch';
import './CharacterDetailsPage.css';
import { useTranslation } from 'react-i18next';

type Character = {
  id: string;
  name: string;
  house?: string;
  dateOfBirth?: string;
  actor?: string;
  image?: string;
  wand?: { wood: string; core: string; length: number };
  patronus?: string;
};

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: characters, loading, error } = useFetch<Character[]>(fetchCharacters);

  if (loading) return <p className="loader">{t('loadingCharacters')}</p>;
  if (error) return <p className="error">{t('error_loading')}</p>;
  if (!characters) return <p className="error">{t('no_characters_found')}</p>;

  const character = characters.find(c => c.id === id);
  if (!character) return <p className="error">{t('character_not_found')}</p>;

  return (
    <div className="character-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← {t('back')}
      </button>

      <div className="character-details">
        <img src={character.image || '/person.png'} alt={character.name} />
        <div className="details-info">
          <h2>{character.name}</h2>
          {character.house && <p>🏠 {t('house')}: {character.house}</p>}
          {character.dateOfBirth && <p>🎂 {t('date_of_birth')}: {character.dateOfBirth}</p>}
          {character.actor && <p>🎭 {t('actor')}: {character.actor}</p>}
          {character.wand && (
            <p>
              {t('wand')}: {character.wand.wood}, {character.wand.core}, {character.wand.length} {t('inches')}
            </p>
          )}
          {character.patronus && <p>✨ {t('patronus')}: {character.patronus}</p>}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
