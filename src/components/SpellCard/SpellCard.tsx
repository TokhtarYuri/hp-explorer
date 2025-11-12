import React from 'react';
import './SpellCard.css';

type Spell = {
  id: string;
  name: string;
  description: string;
};

interface SpellCardProps {
  spell: Spell;
}

const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {
  return (
    <div className="spell-card">
      <h3>{spell.name}</h3>
      <p>{spell.description}</p>
    </div>
  );
};

export default SpellCard;
