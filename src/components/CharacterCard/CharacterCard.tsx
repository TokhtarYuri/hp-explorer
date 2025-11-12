import React from 'react';
import './CharacterCard.css';

type Character = {
  id: string;
  name: string;
  house?: string;
  image?: string;
  actor?: string;
};

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <img
        src={character.image || '/person.png'}
        alt={character.name}
        className="character-image"
      />
      <div className="character-info">
        <h3>{character.name}</h3>
        {character.house && <p>🏠 {character.house}</p>}
      </div>
    </div>
  );
};

export default CharacterCard;
