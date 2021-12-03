const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1
          ? 0 : state.index + 1,
      };
    
    case 'PREVIOUS_COLOR':
      return {
        ...state, 
        index: state.index === 0 ? state.colors.length - 1 :
          state.index - 1,
      };

    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, generateRandomColor()],
        index: state.colors.length,
      }

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
  console.log('next');
});

document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
  console.log('previous');
});

const generateRandomColor = () => {
  const eachCharacter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const random = () => Math.floor(Math.random() * eachCharacter.length);
  for (let index = 0; index < 6; index += 1) {
    color += eachCharacter[random()];
  }
  console.log(color);
  return color;
};

document.getElementById('random').addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
  console.log('random');
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});
