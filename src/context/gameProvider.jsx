import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '.';

export default function GameProvider({ children }) {
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });

  useEffect(() => {
    console.log(`Jogador 1 escolheu: ${playerA.name}`);
    console.log(`Jogador 2 escolheu: ${playerB.name}`);
  }, [playerA, playerB]);

  const contextValue = useMemo(() => (
    {
      playerA, setPlayerA, playerB, setPlayerB,
    }
  ), [playerA, setPlayerA, playerB, setPlayerB]);

  return (
    <GameContext.Provider value={contextValue}>
      { children }
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
