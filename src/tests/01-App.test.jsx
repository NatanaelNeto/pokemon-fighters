import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe,
  expect,
  it,
} from 'vitest';

import App from '../App';

import { PokemonContext } from '../context';
import GameProvider from '../context/gameProvider';
import { POKEMON_CARDS_LENGTH, POKEMON_PROVIDER_MOCK, BAGS_LENGTH } from '../utils/constants';

const toRender = (
  <PokemonContext.Provider value={POKEMON_PROVIDER_MOCK}>
    <GameProvider>
      <App />
    </GameProvider>
  </PokemonContext.Provider>
);

describe('App Component tests', async () => {
  it('Have a title with Pokémon Fighters', () => {
    render(toRender);
    const title = screen.getByRole('heading', { name: 'Pokémon Fighters' });
    expect(title).toBeInTheDocument();
  });

  it('Have two bags', () => {
    render(toRender);
    const bags = screen.getAllByRole('heading', { name: /Bag/, level: 3 });
    expect(bags.length).toBe(BAGS_LENGTH);
  });

  it('Have six Pokémon cards at all', () => {
    render(toRender);
    const pokemonCards = screen.getAllByRole('button', { name: /A/ });
    expect(pokemonCards.length).toBe(POKEMON_CARDS_LENGTH);
  });
});
