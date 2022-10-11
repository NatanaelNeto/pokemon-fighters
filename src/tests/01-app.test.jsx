import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe,
  expect,
  it,
  beforeEach,
} from 'vitest';
import App from '../App';

describe('Tests on App Component', () => {
  beforeEach(() => render(<App />));

  it('Have a title with Pokémon Fighters', () => {
    const title = screen.getByRole('heading', { name: 'Pokémon Fighters' });
    expect(title).toBeInTheDocument();
  });
});
