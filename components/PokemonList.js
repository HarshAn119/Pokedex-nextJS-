import React from 'react';
import { PokemonCard } from './PokemonCard';
import styles from '../styles/Home.module.css';

export const PokemonList = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((pokemon) => (
        <div className={styles.card} key={pokemon.id}>
          <PokemonCard
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
          />
        </div>
      ))}
    </>
  );
};
