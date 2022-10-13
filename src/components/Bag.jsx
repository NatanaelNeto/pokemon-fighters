import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GameContext, PokemonContext } from '../context';
import Card from './Card';

export default function Bag({ isPlayerA }) {
  const { firePokemon, waterPokemon, grassPokemon } = useContext(PokemonContext);
  const { setPlayerA, setPlayerB } = useContext(GameContext);

  const pokemonSet = [];
  if (firePokemon) {
    pokemonSet.push(firePokemon[isPlayerA ? 0 : 1]);
    pokemonSet.push(waterPokemon[isPlayerA ? 0 : 1]);
    pokemonSet.push(grassPokemon[isPlayerA ? 0 : 1]);
  }

  const handleClick = (name, color) => {
    if (isPlayerA) {
      setPlayerA({ name, color });
      return;
    }
    setPlayerB({ name, color });
  };

  return (
    <div>
      <h3>Bag</h3>
      <ul>
        { pokemonSet[0] && pokemonSet.map(({ name, image, color }, index) => (
          <li key={index}>
            <Card
              name={name}
              image={image}
              color={color}
              handleClick={() => handleClick(name, color)}
              data-testid="pokemon-card"
            />
          </li>
        )) }
      </ul>
    </div>
  );
}

Bag.propTypes = {
  isPlayerA: PropTypes.bool.isRequired,
};
