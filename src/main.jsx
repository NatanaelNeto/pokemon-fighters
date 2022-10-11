import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonProvider from './context/pokemonProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PokemonProvider>
      <App />
    </PokemonProvider>,
  );
