const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow', 'gray'],
  index: 0,
};

const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const genRandomColor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const randomColor = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      color += oneChar[randomColor()];
  }
  return color;
};

const reducer = (state = ESTADO_INICIAL, action) => {
  const { colors } = state;
  let { index } = state;
  const color = genRandomColor();
  switch(action.type) {
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: index > 0 ? index - 1 : colors.length - 1,
      }

    case NEXT_COLOR:
      return {
        ...state,
        index: index < colors.length - 1 ? index + 1 : 0,
      }

    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...colors, color],
        index: colors.length,
      }

    default:
      return state;
  }
};

// eslint-disable-next-line no-undef
const store = Redux.createStore(reducer);

// eslint-disable-next-line no-undef
const buttonNext = document.getElementById('next');
// eslint-disable-next-line no-undef
const buttonPrevious = document.getElementById('previous');
// eslint-disable-next-line no-undef
const buttonRandom = document.getElementById('random');

const actionNext = () => {
  store.dispatch({ type: NEXT_COLOR });
};

const actionPrevious = () => {
  store.dispatch({ type: PREVIOUS_COLOR });
};

const actionRandom = () => {
  store.dispatch({ type: RANDOM_COLOR });
};

buttonPrevious.addEventListener('click', actionPrevious);
buttonNext.addEventListener('click', actionNext);
buttonRandom.addEventListener('click', actionRandom);

store.subscribe(() => {
  const { index, colors } = store.getState();
  // eslint-disable-next-line no-undef
  const colorNameElement = document.getElementById('value');
  colorNameElement.innerHTML = colors[index];
  
  // eslint-disable-next-line no-undef
  const backgroundColorElement = document.getElementById('container');
  backgroundColorElement.style.backgroundColor = colors[index];
  console.log(colors);
});
