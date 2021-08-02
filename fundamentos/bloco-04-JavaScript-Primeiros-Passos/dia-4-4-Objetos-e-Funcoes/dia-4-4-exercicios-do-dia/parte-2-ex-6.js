function accumulateNumbers (n) {
    let accumulate = 0;
    for (let i = 1; i <= n; i += 1) {
        accumulate += i;
    }
    console.log(accumulate);
}

accumulateNumbers(5);
accumulateNumbers(10);