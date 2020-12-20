import React from 'react';

import './Pokemon.css';

export const Pokemon = ({
  pokemon
}) => {
  return (
    <div className='pokemon'>
      <h2>{pokemon.name}</h2>
      <img className='pokemon-img' src={String(pokemon.image)} alt='pokemon' />
    </div>
  );
}

export default Pokemon;