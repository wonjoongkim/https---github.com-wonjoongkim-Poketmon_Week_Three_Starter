import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import PokemonsContainer from "./components/PokemonsContainer";
import TypesBar from "./components/TypesBar";
import { PokemonModalProvider } from "./context/PokemonModalProvider";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [type, setType] = useState("ice");
  const debouncedType = useDebounce(type, 500);
  return (
    <PokemonModalProvider>
      <div className="wrapper">
        <h1 className="logo-pokemon">포켓몬 도감</h1>

        <TypesBar toggleType={setType} />
        <PokemonsContainer type={debouncedType} />
        <Modal />
      </div>
    </PokemonModalProvider>
  );
}

export default App;
