const assert = require('assert');

const sum = (...numbers) => {
  return numbers.reduce((summation, currentNumber) => summation + currentNumber, 0);
};
console.log(sum());
console.log(sum(1,2,3,4,5,6,7,8,9,0));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);