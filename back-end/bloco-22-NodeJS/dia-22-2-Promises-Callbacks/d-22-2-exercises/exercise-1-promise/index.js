function receiveNumbers(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (!(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3)) {
      return reject(new Error("Informe apenas números."));
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    return resolve(result);
  });
}

receiveNumbers('a', 1, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`${err}`));

receiveNumbers(3, 1, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`${err}`));

  receiveNumbers(3, 5, 10)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err}`));

const main = async (n1, n2, n3) => {
  try {
    const result = await receiveNumbers(n1, n2, n3);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};


const generateRandomNumber = () => Math.floor(Math.random() *100 + 1);

const callMainWithRandoms = () => {
  const randomNumbers = Array.from({ length: 3 }).map(generateRandomNumber);
  main(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));
};

callMainWithRandoms();
