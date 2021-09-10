const wakeUp = () => 'Acordando!!';
const goBreakfast = () => 'Bora tomar café!!';
const goSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback());

doingThings(wakeUp);
doingThings(wakeUp);
doingThings(wakeUp);
doingThings(wakeUp);
doingThings(wakeUp);
doingThings(goBreakfast);
doingThings(goSleep);