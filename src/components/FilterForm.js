import React, { useState } from 'react';

const FilterForm = ({ characters, setCharacters }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const applyFilters = () => {
    let filteredCharacters = characters;

    if (nameFilter) {
      filteredCharacters = filteredCharacters.filter(character =>
        character.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (statusFilter) {
      filteredCharacters = filteredCharacters.filter(character =>
        character.status === statusFilter
      );
    }

    if (genderFilter) {
      filteredCharacters = filteredCharacters.filter(character =>
        character.gender === genderFilter
      );
    }

    setCharacters(filteredCharacters);
  };

  return (
    <div className="filter-form">
      <input
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="Alive">Alive</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterForm;
