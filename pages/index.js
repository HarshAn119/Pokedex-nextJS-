import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { PokemonList } from '../components/PokemonList';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const res = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
  );

  return {
    props: {
      pokemon: await res.json(),
    },
  };
}

export default function Home({ pokemon }) {
  const [search, setSearch] = useState('');

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  const filterPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      <header className={styles.header}>
        <h2>Pokedex</h2>
        <input
          type="search"
          placeholder="Search for ..."
          autoComplete="off"
          onChange={handleOnChange}
        />
      </header>
      <div className={styles.grid}>
        <PokemonList pokemon={filterPokemon} />
      </div>
    </div>
  );
}
