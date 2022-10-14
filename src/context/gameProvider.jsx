import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '.';
import { COLOR_TO_NUMBER, WIN_CONDITION } from '../utils/constants';

export default function GameProvider({ children }) {
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });
  const [winner, setWinner] = useState('');
  const [blockA, setBlockA] = useState(false);
  const [blockB, setBlockB] = useState(false);

  useEffect(() => {
  }, [playerA, playerB]);

  const battle = () => {
    if (playerA.color !== '' && playerB.color !== '') {
      setWinner(WIN_CONDITION[COLOR_TO_NUMBER[playerA.color]][COLOR_TO_NUMBER[playerB.color]]);
    }

    setBlockA(false);
    setBlockB(false);
  };

  const contextValue = useMemo(() => (
    {
      playerA, setPlayerA, playerB, setPlayerB, battle, winner, blockA, setBlockA, blockB, setBlockB
    }
  ), [playerA, setPlayerA, playerB, setPlayerB, battle, winner, blockA, setBlockA, blockB, setBlockB]);

  return (
    <GameContext.Provider value={contextValue}>
      { children }
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
