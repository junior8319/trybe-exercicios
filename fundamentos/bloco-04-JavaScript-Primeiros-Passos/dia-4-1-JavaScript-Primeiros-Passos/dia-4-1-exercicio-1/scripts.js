const myName = "Antonio Carlos";
const birthCity = "Cachoeira Paulista";
let birthYear = 1983;
console.log(myName + birthCity + birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = "Lorena";
console.log(birthCity);

/**
 * [Running] node "/home/junior/estudos/trybe-exercicios/fundamentos/bloco-04-JavaScript-Primeiros-Passos/dia-4-1-JavaScript-Primeiros-Passos/dia-4-1-exercicio-1/scripts.js"
Antonio CarlosCachoeira Paulista1983
2030
/home/junior/estudos/trybe-exercicios/fundamentos/bloco-04-JavaScript-Primeiros-Passos/dia-4-1-JavaScript-Primeiros-Passos/dia-4-1-exercicio-1/scripts.js:7
birthCity = "Lorena";
          ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/junior/estudos/trybe-exercicios/fundamentos/bloco-04-JavaScript-Primeiros-Passos/dia-4-1-JavaScript-Primeiros-Passos/dia-4-1-exercicio-1/scripts.js:7:11)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.159 seconds
 */