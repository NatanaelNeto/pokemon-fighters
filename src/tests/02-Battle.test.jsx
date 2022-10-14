import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe,
  expect,
  test,
} from 'vitest';
import { PokemonContext } from '../context';
import {
  POKEMON_PROVIDER_MOCK, PLAYER_ONE_WIN, PLAYER_TWO_WIN, DRAW,
} from '../utils/constants';
import GameProvider from '../context/gameProvider';
import App from '../App';

const toRender = (
  <PokemonContext.Provider value={POKEMON_PROVIDER_MOCK}>
    <GameProvider>
      <App />
    </GameProvider>
  </PokemonContext.Provider>
);

describe('Battle tests', () => {
  test('Player 1 win condition', async () => {
    render(toRender);

    const pokemon = screen.getAllByRole('button', { name: /A/ });
    const battleBtn = screen.getByRole('button', { name: /Batalha!/ });

    const lockBtn = screen.getAllByRole('button', { name: 'Confirmar' });

    expect(lockBtn[0]).toBeInTheDocument();
    expect(lockBtn[1]).toBeInTheDocument();
    
    await userEvent.click(pokemon[0]);
    await userEvent.click(pokemon[5]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_ONE_WIN)).toBeInTheDocument();

    await userEvent.click(pokemon[1]);
    await userEvent.click(pokemon[3]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_ONE_WIN)).toBeInTheDocument();

    await userEvent.click(pokemon[2]);
    await userEvent.click(pokemon[4]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_ONE_WIN)).toBeInTheDocument();
  });

  test('Player 2 win condition', async () => {
    render(toRender);

    const pokemon = screen.getAllByRole('button', { name: /A/ });
    const battleBtn = screen.getByRole('button', { name: /Batalha!/ });

    const lockBtn = screen.getAllByRole('button', { name: 'Confirmar' });

    expect(lockBtn[0]).toBeInTheDocument();
    expect(lockBtn[1]).toBeInTheDocument();

    await userEvent.click(pokemon[0]);
    await userEvent.click(pokemon[4]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_TWO_WIN)).toBeInTheDocument();

    await userEvent.click(pokemon[1]);
    await userEvent.click(pokemon[5]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_TWO_WIN)).toBeInTheDocument();

    await userEvent.click(pokemon[2]);
    await userEvent.click(pokemon[3]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(PLAYER_TWO_WIN)).toBeInTheDocument();
  });

  test('Draw condition', async () => {
    render(toRender);

    const pokemon = screen.getAllByRole('button', { name: /A/ });
    const battleBtn = screen.getByRole('button', { name: /Batalha!/ });

    const lockBtn = screen.getAllByRole('button', { name: 'Confirmar' });

    expect(lockBtn[0]).toBeInTheDocument();
    expect(lockBtn[1]).toBeInTheDocument();

    await userEvent.click(pokemon[0]);
    await userEvent.click(pokemon[3]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(DRAW)).toBeInTheDocument();

    await userEvent.click(pokemon[1]);
    await userEvent.click(pokemon[4]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(DRAW)).toBeInTheDocument();

    await userEvent.click(pokemon[2]);
    await userEvent.click(pokemon[5]);
    await userEvent.click(lockBtn[0]);
    await userEvent.click(lockBtn[1]);
    await userEvent.click(battleBtn);

    expect(screen.getByText(DRAW)).toBeInTheDocument();
  });
});
