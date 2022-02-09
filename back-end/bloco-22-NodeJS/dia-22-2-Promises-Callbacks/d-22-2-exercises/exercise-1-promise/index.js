function receiveNumbers(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (!(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3)) {
      return reject(new Error("Informe apenas números."));
    }

    const resultado = (num1 + num2) * num3;
    return resolve(resultado);
  });
}

receiveNumbers('a', 1, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err}`));

receiveNumbers(3, 1, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err}`));

const main = async (n1, n2, n3) => {
  try {
    await receiveNumbers(n1, n2, n3);
  } catch (error) {
    console.log(error);
  }
};
// i have to fix the main() function.
