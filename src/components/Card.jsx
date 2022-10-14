import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../context';

export default function Card({
  name, image, color, handleClick, active, confirmed,
}) {
  const { blockA, blockB } = useContext(GameContext);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`card-pokemon ${color}-color ${active}`}
      disabled={ confirmed ? blockA : blockB }
    >
      <img src={image} alt={name} />
      <span>{name}</span>
    </button>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  confirmed: PropTypes.bool.isRequired,
};
