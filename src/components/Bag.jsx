import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { GameContext, PokemonContext } from '../context';
import Card from './Card';

export default function Bag({ isPlayerA }) {
  const {
    firePokemon,
    waterPokemon,
    grassPokemon,
  } = useContext(PokemonContext);
  const {
    setPlayerA,
    setPlayerB,
    setBlockA,
    setBlockB,
  } = useContext(GameContext);
  
  const [pokemon, setPokemon] = useState({ name: '', color:'' });
  const [active, setActive] = useState('');

  const pokemonSet = [];
  if (firePokemon) {
    pokemonSet.push(firePokemon[isPlayerA ? 0 : 1]);
    pokemonSet.push(waterPokemon[isPlayerA ? 0 : 1]);
    pokemonSet.push(grassPokemon[isPlayerA ? 0 : 1]);
  }

  const handleClick = (name, color) => {
    setActive(name);
    setPokemon({name, color});
  };

  const confirm = () => {
    const { name, color } = pokemon;
    setActive('');
    if (isPlayerA) {
      setPlayerA({ name, color });
      setBlockA(true);
      return;
    }
    setPlayerB({ name, color });
    setBlockB(true);
  }

  return (
    <div className="bag">
      <h3>Bolsa</h3>
      <ul>
        { pokemonSet[0] && pokemonSet.map(({ name, image, color }, index) => (
          <li key={index}>
            <Card
              name={name}
              image={image}
              color={color}
              handleClick={() => handleClick(name, color)}
              active={name === active ? `${color}-active` : ''}
              confirmed={isPlayerA}
            />
          </li>
        )) }
      </ul>
      <button
        type="button"
        className="bag-confirm"
        onClick={() => confirm()}
      >
        Confirmar
      </button>
    </div>
  );
}

Bag.propTypes = {
  isPlayerA: PropTypes.bool.isRequired,
};
