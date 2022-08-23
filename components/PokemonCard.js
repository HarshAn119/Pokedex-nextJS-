import React from 'react';
import Link from 'next/link';

export const PokemonCard = ({ id, image, name }) => {
  return (
    <>
      <Link href={`/pokemon/${id}`}>
        <a>
          <img
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`}
            alt={name}
          />
          <h3>{name}</h3>
        </a>
      </Link>
    </>
  );
};
