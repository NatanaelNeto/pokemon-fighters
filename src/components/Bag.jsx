import React, { useContext } from 'react';
import { pokemonContext } from '../context';
import Card from './Card';

const POKEMON_COUNT = 3;

export default function Bag() {
  const { firePokemon, waterPokemon, grassPokemon } = useContext(pokemonContext);

  const pokemonSet = [];
  pokemonSet.push(firePokemon[Math.floor(Math.random() * POKEMON_COUNT)]);
  pokemonSet.push(waterPokemon[Math.floor(Math.random() * POKEMON_COUNT)]);
  pokemonSet.push(grassPokemon[Math.floor(Math.random() * POKEMON_COUNT)]);
  console.log(pokemonSet);
  return (
    <ul>
      { pokemonSet[0] && pokemonSet.map(({ name, image, color }) => (
        <li>
          <Card
            name={name}
            image={image}
            color={color}
            handleClick={() => console.log(color)}
          />
        </li>
      )) }
    </ul>
  );
}
