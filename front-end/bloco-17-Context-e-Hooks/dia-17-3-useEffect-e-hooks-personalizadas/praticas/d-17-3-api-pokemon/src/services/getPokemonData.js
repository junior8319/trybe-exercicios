
const getPokemonsList = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=25'; // limit 1118
  try {
    const fetchResult = await fetch(API_URL);
    const jsonResult = await fetchResult.json();
    return jsonResult;
  } catch (error) {
    console.log('Não foi possível encontrar o caminho.');
  }
};

const getPokemonsUrls = async () => {
  const list = await getPokemonsList();
  const pokemons = list.results.map(pokemon => pokemon);
  return pokemons;
};

const getUrlsList = async () => {
  const pokemonsList = await getPokemonsUrls();
  const urlsList = pokemonsList.map((pokemon) => pokemon.url);
  return urlsList;
};

const getPokemonData = async() => {
  const urls = await getUrlsList();
  const pokemons = await urls.map(async (url) => {
    const result = await fetch(url);
    const pokemon = await result.json();
    console.log(pokemon.name);
    return pokemon;
  });
  return pokemons;
};

// a função exportada abaixo 
export default getPokemonData;