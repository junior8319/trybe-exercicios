function hydrate (receivedString) {
    return receivedString.replace(/\D+/, ' copo(s) de água.');
}

console.log(hydrate("1 cerveja"));
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

