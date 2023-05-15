import "./App.css";
import PokeCard from "./components/PokeCard";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { getDataAsync } from "./services/PokemonService";
import React from "react";
import Pokemon from "./interfaces/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    async function fetchDataAsync(): Promise<void> {
      const data: any = await getDataAsync();
      setPokemons(data);
    }
    fetchDataAsync();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3"
          >
            <PokeCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
