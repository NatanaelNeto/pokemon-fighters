import React, { useContext } from 'react';
import './App.css';
import Bag from './components/Bag';
import { GameContext } from './context';

function App() {
  const { battle, winner } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        <Bag isPlayerA />
        <div className="menu-container">
          <h1>
            Pokémon<br/>
            <span>Fighters</span>
          </h1>
          <button
            type="button"
            onClick={() => battle()}
          >
            Batalha!
          </button>
          <p>{winner}</p>
        </div>
        <Bag isPlayerA={false} />
      </div>
    </div>
  );
}

export default App;
