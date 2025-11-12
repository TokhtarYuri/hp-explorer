const BASE_URL = 'https://hp-api.onrender.com/api';

export async function fetchCharacters() {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) throw new Error('Failed to fetch characters');
    return await response.json();
  } catch (error) {
    console.error('❌ Characters fetch error:', error);
    return [];
  }
}

export async function fetchSpells() {
  try {
    const response = await fetch(`${BASE_URL}/spells`);
    if (!response.ok) throw new Error('Failed to fetch spells');
    return await response.json();
  } catch (error) {
    console.error('❌ Spells fetch error:', error);
    return [];
  }
}
