import MyContext from "./MyContext";

function Test() {
  return (
    <MyContext.Consumer>
      {({ value, changeState }) => (
        <><p>{value}</p><input type="text" onChange={(event) => changeState(event)} /></>
      )}
    </MyContext.Consumer>
  );
}

export default Test;
