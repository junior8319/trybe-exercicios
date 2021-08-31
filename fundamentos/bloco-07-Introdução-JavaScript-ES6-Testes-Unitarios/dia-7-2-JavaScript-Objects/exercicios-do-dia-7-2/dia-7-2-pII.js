const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 25,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (receptorObject, turn) => {
  Object.assign(receptorObject, turn);
}
addTurn(lesson2, {turno: 'manhã'});
// console.log(lesson2);

const showKeys = objectToShow => Object.keys(objectToShow);
const showValues = objectToShow => Object.values(objectToShow);
// console.log(showKeys(lesson1), showValues(lesson1));
// console.log(showKeys(lesson2), showValues(lesson2));
// console.log(showKeys(lesson3), showValues(lesson3));

const size = objectToMeasure => Object.keys(objectToMeasure).length;
// console.log(size(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const numberOfStudentsInLessons = () => {
  const lessonsInAllLessons = Object.assign({}, Object.values(allLessons));
  let sumOfStudents = 0;
  for (const index in lessonsInAllLessons) {
    sumOfStudents += parseInt(lessonsInAllLessons[index].numeroEstudantes);
  }
  console.log(sumOfStudents);
  return sumOfStudents;
}
numberOfStudentsInLessons();