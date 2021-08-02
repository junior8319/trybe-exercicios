function findBiggerNameInArray (received) {
    let array = received;
    let control = array[0];

    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > control.length) {
            control = array[i];
        }
    }
    console.log(control);
}

findBiggerNameInArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
