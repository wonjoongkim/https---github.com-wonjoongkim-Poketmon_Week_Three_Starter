import { useState, useEffect } from "react";

export function usePokemonTypes() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      const API_END_POINT = `https://pokeapi.co/api/v2/type/`;
      const res = await fetch(API_END_POINT);
      const { results } = await res.json();

      setTypes(
        results.filter(
          ({ name }) =>
            name !== "unknown" && name !== "shadow" && name !== "stellar"
        )
      );
      setLoading(false);
    };

    fetchTypes();
  }, []);

  return { types, loading };
}
