import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetail from './CharacterDetail';
import FilterForm from './FilterForm';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <FilterForm characters={characters} setCharacters={setCharacters} />
      <ul>
        {characters.map((character) => (
          <li key={character.id} onClick={() => handleCharacterClick(character)}>
            {character.name}
          </li>
        ))}
      </ul>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
    </div>
  );
};

export default CharacterList;
