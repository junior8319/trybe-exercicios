import './App.css';
import { useEffect, useState } from 'react';
import getPokemonData from './services/getPokemonData';

function App() {
  //configura o estado
  const [pokemons, setPokemons] = useState([]);
  //componentDidMount
  useEffect(async () => {
    const pokemons = await getPokemonData();
    setPokemons(pokemons);
  }, [])

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ul>
        {/* {
          pokemons.map((url) => <li key={url}>{url}</li>)
        } */}
      </ul>
    </div>
  );
}

export default App;
