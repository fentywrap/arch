import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty</h1>
      </header>
      <main className="App-main">
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
