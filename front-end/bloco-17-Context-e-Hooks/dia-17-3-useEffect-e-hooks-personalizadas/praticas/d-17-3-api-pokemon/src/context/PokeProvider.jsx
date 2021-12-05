import React, { useState } from "react";
import getPokemonData from "../services/getPokemonData";

function PokeProvider({ children }) {
  // Define o primeiro estado (state)
  // setState fará a configuração deste estado globalmente na aplicação
  const [state, setState] = useState({
    error: null,
    isFetching: false,
  });

  async function requestPokemonData() {
    const pokemons = await getPokemonData();
  }
}