import MyContext from "./MyContext";
import Test from "./Test";

const changeState = ({target: { value }} = 'estado inicial') => value;

function Provider() {
  const state = {
    value: 'estado inicial',
    changeState: changeState,
  };
  return (
    <MyContext.Provider value={state}>
      <h1>Componente Provedor</h1>
      <Test state={state} changeState={ changeState } />
    </MyContext.Provider>
  );
}

export default Provider;
