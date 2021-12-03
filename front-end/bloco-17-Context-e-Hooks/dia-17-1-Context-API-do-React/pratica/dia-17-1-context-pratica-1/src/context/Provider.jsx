import MyContext from "./MyContext";
import Test from "./Test";

function Provider() {
  const state = 'estado inicial';
  return (
    <MyContext.Provider value={state}>
      <h1>Componente Provedor</h1>
      <Test state={state} />
    </MyContext.Provider>
  );
}

export default Provider;
