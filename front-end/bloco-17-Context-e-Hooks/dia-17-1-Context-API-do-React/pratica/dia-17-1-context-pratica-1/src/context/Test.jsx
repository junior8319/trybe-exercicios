import MyContext from "./MyContext";

function Test() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <p>{value}</p>
      )}
    </MyContext.Consumer>
  );
}

export default Test;
