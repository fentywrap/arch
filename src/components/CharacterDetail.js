import React from 'react';

const CharacterDetail = ({ character }) => {
  return (
    <div class = "name">
      <h2>Character Details</h2>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CharacterDetail;
