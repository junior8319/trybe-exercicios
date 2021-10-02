const myRemove = (receiveArray, receivedItem) => {
  console.log(receiveArray);
  const newArray = [];
  receiveArray.forEach((currentItem) => {
    if (receivedItem !== currentItem) {
      newArray.push(currentItem);
    }
  });
  console.log(newArray);
  return newArray;
};

module.exports = myRemove;