import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameProvider from './context/gameProvider';
import PokemonProvider from './context/pokemonProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PokemonProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </PokemonProvider>,
  );
