import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class PokemonsList extends React.Component {
  render() {
    return (
      <section className="PokemonsList">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.id} thisPoke={pokemon} />;
        })}
      </section>
    );
  }
}

export default PokemonsList;
