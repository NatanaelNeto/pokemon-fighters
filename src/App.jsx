import React, { useContext } from 'react';
import './App.css';
import Bag from './components/Bag';
import { GameContext } from './context';

function App() {
  const { battle } = useContext(GameContext);
  return (
    <div className="App">
      <h1>Pokémon Fighters</h1>
      <Bag isPlayerA />
      <Bag isPlayerA={false} />
      <button
        type="button"
        onClick={() => battle()}
      >
        Batalha!
      </button>
    </div>
  );
}

export default App;
