import App from "../App";
import MyContext from "./MyContext";
import Test from "./Test";

function Provider() {
  return (
    <MyContext.Provider value={'estado inicial'}>
      <Provider>
        <Test />
      </Provider>
    </MyContext.Provider>
  );
}

export default Provider;
