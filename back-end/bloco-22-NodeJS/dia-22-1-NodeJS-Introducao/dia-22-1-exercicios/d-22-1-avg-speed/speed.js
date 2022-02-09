const { timeAsked, distanceAsked } = require('./dataAsked');

const inHoursTime = timeAsked / 60;

const avgSpeed = () => distanceAsked / inHoursTime;

module.exports = avgSpeed;
