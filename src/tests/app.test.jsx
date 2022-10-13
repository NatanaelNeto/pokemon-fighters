import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe,
  expect,
  it,
} from 'vitest';

import App from '../App';
import Bag from '../components/Bag';

import { PokemonContext } from '../context';
import { POKEMON_CARDS_LENGTH, POKEMON_PROVIDER_MOCK, BAGS_LENGTH } from '../utils/constants';

describe('Tests on App Component', () => {
  it('Have a title with Pokémon Fighters', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: 'Pokémon Fighters' });
    expect(title).toBeInTheDocument();
  });

  it('Have two bags', () => {
    render(<App />);

    const bags = screen.getAllByText('Bag');
    expect(bags.length).toBe(BAGS_LENGTH);
  });

  it('Render a heading with Bag text in a Bag', () => {
    render(
      <PokemonContext.Provider value={POKEMON_PROVIDER_MOCK}>
        <Bag />
      </PokemonContext.Provider>,
    );

    const text = screen.getByRole('heading', { name: /Bag/, level: 3 });
    expect(text).toBeInTheDocument();
  });

  it('Have three Pokémon cards in a Bag', () => {
    render(
      <PokemonContext.Provider value={POKEMON_PROVIDER_MOCK}>
        <Bag />
      </PokemonContext.Provider>,
    );
    const pokemonCards = screen.getAllByRole('button', { name: /A/ });
    expect(pokemonCards.length).toBe(POKEMON_CARDS_LENGTH / 2);
  });

  it('Have six Pokémon cards at all', () => {
    render(
      <PokemonContext.Provider value={POKEMON_PROVIDER_MOCK}>
        <App />
      </PokemonContext.Provider>,
    );
    const pokemonCards = screen.getAllByRole('button', { name: /A/ });
    expect(pokemonCards.length).toBe(POKEMON_CARDS_LENGTH);
  });
});
