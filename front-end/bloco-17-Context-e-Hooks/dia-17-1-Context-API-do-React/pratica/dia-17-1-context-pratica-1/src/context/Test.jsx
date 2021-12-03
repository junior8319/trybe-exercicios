import MyContext from "./MyContext";

function Test(value) {
  return (
    <MyContext.Consumer>
      {(value) => (
        <p>{value}</p>
      )}
    </MyContext.Consumer>
  );
}

export default Test;
