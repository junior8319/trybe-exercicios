function hydrate (receivedString) {
    let getNumber = '';
    getNumber += receivedString.replace(/\D/gim, '');
    let sumOfNumbers = 0;
    for (let index = 0; index < getNumber.length; index += 1) {
        sumOfNumbers += parseInt(getNumber[index]);
    }
    return (sumOfNumbers === 1) ? sumOfNumbers + ' copo de água' : sumOfNumbers + ' copos de água' ;
}
console.log(hydrate("1 cerveja"));
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
onsole.log(hydrate("1 cerveja, 5 cachaças"));
console.log('5tr1ng0'.replace(/([^\d])+/gim, ''));
console.log('1 cerveja'.replace(/\D/gim, ''));