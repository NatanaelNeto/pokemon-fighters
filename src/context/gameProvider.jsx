import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '.';
import { COLOR_TO_NUMBER, WIN_CONDITION } from '../utils/constants';

export default function GameProvider({ children }) {
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });
  const [winner, setWinner] = useState('');

  useEffect(() => {
  }, [playerA, playerB]);

  const battle = () => {
    if (playerA.color !== '' && playerB.color !== '') {
      setWinner(WIN_CONDITION[COLOR_TO_NUMBER[playerA.color]][COLOR_TO_NUMBER[playerB.color]]);
    }
  };

  const contextValue = useMemo(() => (
    {
      playerA, setPlayerA, playerB, setPlayerB, battle, winner,
    }
  ), [playerA, setPlayerA, playerB, setPlayerB, battle, winner]);

  return (
    <GameContext.Provider value={contextValue}>
      { children }
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
