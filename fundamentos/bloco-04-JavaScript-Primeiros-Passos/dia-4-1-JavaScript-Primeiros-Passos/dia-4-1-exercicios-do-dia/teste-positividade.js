let teste = true;

if (typeof(teste) === "number" && teste > 0) {
    console.log("positive");
} else if (typeof(teste) === "number" && teste < 0) {
    console.log("negative");
} else if(typeof(teste) === "number" && teste === 0) {
    console.log("zero");
} else {
    console.log("não é número: " + teste);
}