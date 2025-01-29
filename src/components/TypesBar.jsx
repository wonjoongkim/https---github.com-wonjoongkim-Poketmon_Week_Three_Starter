import { useEffect, useState } from "react";
import { getTypeIconSrc } from "../utils/pokemon-helper";
import { usePokemonTypes } from "../hooks/usePokemonTypes";

const TypesBar = ({ toggleType }) => {
  const { types, loading } = usePokemonTypes();

  if (loading) return null;

  return (
    <nav className="types-bar">
      {types.map(({ name }) => {
        const typeImg = getTypeIconSrc(name);

        return (
          <a key={name} className={name} onClick={() => toggleType(name)}>
            <img src={typeImg} alt={name} />
          </a>
        );
      })}
    </nav>
  );
};

export default TypesBar;
