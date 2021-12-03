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

const CHANGE_ONE = 'CHANGE_ONE';
const CHANGE_TWO = 'CHANGE_TWO';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  const { nome, sobrenome } = action;
  switch (action.type) {
    case CHANGE_ONE:
      return {
        ...state,
        nome,
        sobrenome,
      };

    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  const { nome, sobrenome } = action;
  switch (action.type) {
    case CHANGE_TWO:
      return {
        ...state,
        nome,
        sobrenome,
      }

    default:
      return state;
  }
};

// eslint-disable-next-line no-undef
const combinedReducers = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

// eslint-disable-next-line no-undef
const store = Redux.createStore(combinedReducers);

const actionChangeOne = () => {
  // eslint-disable-next-line no-undef
  const inputNameOne = document.getElementById('name-one');
  // eslint-disable-next-line no-undef
  const inputLastNameOne = document.getElementById('last-name-one');
  let nameOneValue = inputNameOne.value;
  let lastNameOneValue = inputLastNameOne.value;
  store.dispatch({
    type: CHANGE_ONE,
    nome: nameOneValue,
    sobrenome: lastNameOneValue,
  });
};

const actionChangeTwo = () => {
  // eslint-disable-next-line no-undef
  const nameTwoValue = document.getElementById('name-two').value;
  // eslint-disable-next-line no-undef
  const lastNameTwoValue = document.getElementById('last-name-two').value;
  store.dispatch({
    type: CHANGE_TWO,
    nome: nameTwoValue,
    sobrenome: lastNameTwoValue,
  });
};

// eslint-disable-next-line no-undef
const buttonChangeOne = document.getElementById('change-one');
buttonChangeOne.addEventListener('click', actionChangeOne);
// eslint-disable-next-line no-undef
const buttonChangeTwo = document.getElementById('change-two');
buttonChangeTwo.addEventListener('click', actionChangeTwo);

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  // eslint-disable-next-line no-undef
  const nameOne = document.getElementById('nome-1');
  nameOne.innerHTML = meuPrimeiroReducer.nome;
  // eslint-disable-next-line no-undef
  const lastNameOne = document.getElementById('sobrenome-1');
  lastNameOne.innerHTML = meuPrimeiroReducer.sobrenome;
  // eslint-disable-next-line no-undef
  const nameTwo = document.getElementById('nome-2');
  nameTwo.innerHTML = meuSegundoReducer.nome;
  // eslint-disable-next-line no-undef
  const lastNameTwo = document.getElementById('sobrenome-2');
  lastNameTwo.innerHTML = meuSegundoReducer.sobrenome;
});
