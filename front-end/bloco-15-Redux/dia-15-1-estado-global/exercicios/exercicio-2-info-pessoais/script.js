const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'ALTERAR_PRIMEIRO':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };

    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store  = Redux.createStore(combinedReducers);

document.getElementById('change-name-one').addEventListener('click', () => {
  store.dispatch({ 
    type: 'ALTERAR_PRIMEIRO',
    nome: generateRandomName(),
    sobrenome: generateRandomName(),
  });
});

const generateRandomName = () => {
  const names = ['Carlos', 'Maria', 'Silvia', 'Eustáquio', 'Eustáquia', 'Carla', 'Karla', 'Karl', 'Rogério', 'Rogéria'];

  const index = () => Math.floor(Math.random() * name.length);

  console.log(names[index]);
  return names[index];
}

store.subscribe(() => {
  const { meuPrimeiroReducer } = store.getState();
  document.getElementById('nome-1').innerHTML = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerHTML = meuPrimeiroReducer.sobrenome;
});