const newEmployee = (fullName) => {
  const email = function(fullName) {
    const adjustedName = fullName.toLowerCase().split(' ').join('_');
    return `${adjustedName}@trybe.com`
  }
  const theEmployee = {
    fullName,
    email: email(fullName),
   }
  return theEmployee;
};

const newEmployees = () => {
  const employees = {
    id1 : newEmployee('Pedro Guerra'),
    id2 : newEmployee('Luiza Drummond'),
    id3 : newEmployee('Carla Paiva')
  }
  return employees;
}

console.log(newEmployees());
