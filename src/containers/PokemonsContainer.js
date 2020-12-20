import React from 'react';

import Pokemon from '../components/Pokemon';

import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';

import './PokemonsContainer.css';

const PokemonsContainer = () => {

  const { data : { pokemons = [] } = [] } = useQuery(GET_POKEMONS, { 
    variables : { first : 10 } 
  });

  return (
    <div className='pokemon-container'>
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
};

export default PokemonsContainer;