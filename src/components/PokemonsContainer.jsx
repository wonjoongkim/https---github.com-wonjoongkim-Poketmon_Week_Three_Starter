import { useEffect, useState } from "react";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../hooks/usePokemon";

const PokemonsContainer = ({ type }) => {
  const { pokemons, loading } = usePokemon(type);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
