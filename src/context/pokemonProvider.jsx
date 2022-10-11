import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { pokemonContext } from '.';
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
    const fire = [];
    fireType.forEach((f) => {
      results.push(
        fetch(`${BASE_URL}${f}`)
          .then((response) => response.json())
          .then((data) => fire.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
          })),
      );
    });

    const water = [];
    waterType.forEach((w) => {
      results.push(
        fetch(`${BASE_URL}${w}`)
          .then((response) => response.json())
          .then((data) => water.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
          })),
      );
    });

    const grass = [];
    grassType.forEach((g) => {
      results.push(
        fetch(`${BASE_URL}${g}`)
          .then((response) => response.json())
          .then((data) => grass.push({
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
          })),
      );
    });

    await Promise.all(results);

    setFirePokemon(fire);
    setWaterPokemon(water);
    setGrassPokemon(grass);
  };

  useEffect(() => {
    setAllStates();
  }, []);

  const contextValue = useMemo(() => ({ firePokemon, waterPokemon, grassPokemon }), []);
  return (
    <pokemonContext.Provider value={contextValue}>
      { children }
    </pokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
