import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCharacters } from '../../api/hpApi';
import { useFetch } from '../../hooks/useFetch';
import './CharacterDetailsPage.css';

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

  const { data: characters, loading, error } = useFetch<Character[]>(fetchCharacters);

  if (loading) return <p className="loader">Loading character...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!characters) return <p className="error">No characters found</p>;

  const character = characters.find(c => c.id === id);
  if (!character) return <p className="error">Character not found</p>;

  return (
    <div className="character-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="character-details">
        <img src={character.image || '/person.png'} alt={character.name} />
        <div className="details-info">
          <h2>{character.name}</h2>
          {character.house && <p>🏠 House: {character.house}</p>}
          {character.dateOfBirth && <p>🎂 Date of Birth: {character.dateOfBirth}</p>}
          {character.actor && <p>🎭 Actor: {character.actor}</p>}
          {character.wand && (
            <p>
              Wand: {character.wand.wood}, {character.wand.core}, {character.wand.length} inches
            </p>
          )}
          {character.patronus && <p>Patronus: {character.patronus}</p>}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
