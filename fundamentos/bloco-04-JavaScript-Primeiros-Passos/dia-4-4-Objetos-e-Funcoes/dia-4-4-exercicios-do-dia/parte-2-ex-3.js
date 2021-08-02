function findSmallerInArray (received) {
    let array = received;
    let control = array[0];
    let iOfSmaller = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < control) {
            iOfSmaller = i;
            control = array[i];
        }
    }
    console.log(iOfSmaller);
}

findSmallerInArray([2, 3, 6, 7, 10, 1]);
findSmallerInArray([2, 4, 6, 7, 10, 0, -3]);