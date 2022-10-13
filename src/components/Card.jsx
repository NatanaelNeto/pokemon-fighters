import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  name, image, color, handleClick, active,
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`card-pokemon ${color}-color ${active}`}
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
};
