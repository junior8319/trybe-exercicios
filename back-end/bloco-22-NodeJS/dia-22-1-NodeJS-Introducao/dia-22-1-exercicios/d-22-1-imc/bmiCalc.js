const { askHeight, askWeight } = require('./asks');

const bmiCalc = () => askWeight / Math.pow(askHeight, 2);

module.exports = bmiCalc;
