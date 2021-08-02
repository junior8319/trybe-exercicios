function findBiggerInArray (received) {
    let array = received;
    let control = array[0];
    let iOfBigger = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > control) {
            iOfBigger = i;
            control = array[i];
        }
    }
    console.log(iOfBigger);
}

findBiggerInArray([2, 3, 6, 7, 10, 1]);