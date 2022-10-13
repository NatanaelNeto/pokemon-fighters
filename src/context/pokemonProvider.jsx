/* eslint-disable no-console */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { PokemonContext } from '.';
import { fireType, waterType, grassType } from '../utils/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export default function PokemonProvider({ children }) {
  // Cria o estado
  const [firePokemon, setFirePokemon] = useState([]);
  const [waterPokemon, setWaterPokemon] = useState([]);
  const [grassPokemon, setGrassPokemon] = useState([]);

  // Preenche o estado
  const setAllStates = async () => {
    const results = [];
    const errors = [];
    const fire = [];
    fireType.forEach((f) => {
      results.push(
        fetch(`${BASE_URL}${f.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => fire.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            color: 'red',
          }))
          .catch((error) => errors.push(error)),
      );
    });

    const water = [];
    waterType.forEach((w) => {
      results.push(
        fetch(`${BASE_URL}${w.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => water.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            color: 'blue',
          }))
          .catch((error) => errors.push(error)),
      );
    });

    const grass = [];
    grassType.forEach((g) => {
      results.push(
        fetch(`${BASE_URL}${g.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => grass.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            color: 'green',
          }))
          .catch((error) => errors.push(error)),
      );
    });

    await Promise.all(results);
    setFirePokemon([
      fire[Math.floor(Math.random() * fire.length)],
      fire[Math.floor(Math.random() * fire.length)],
    ]);
    setWaterPokemon([
      water[Math.floor(Math.random() * water.length)],
      water[Math.floor(Math.random() * water.length)],
    ]);
    setGrassPokemon([
      grass[Math.floor(Math.random() * grass.length)],
      grass[Math.floor(Math.random() * grass.length)],
    ]);
  };

  useEffect(() => {
    setAllStates();
  }, []);

  const contextValue = useMemo(() => (
    { firePokemon, waterPokemon, grassPokemon }
  ), [firePokemon, waterPokemon, grassPokemon]);
  return (
    <PokemonContext.Provider value={contextValue}>
      { children }
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
