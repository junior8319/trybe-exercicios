let custo = 10;
console.log(custo);
let valorVenda = 10;
console.log(valorVenda);
let quantidade = 10;
console.log(quantidade);
let taxa = 10;
console.log(taxa);
let custoTotalUnit = custo + ((custo*taxa)/100);
console.log(custoTotalUnit);
let custoTotal = custoTotalUnit * quantidade;
console.log(custoTotal);
let valorVendaTotal = valorVenda * quantidade;
console.log(valorVendaTotal);
let lucro = valorVendaTotal -custoTotal;
console.log(lucro);