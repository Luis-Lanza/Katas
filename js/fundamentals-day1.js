function getCount(str) {
    // let vowelsCount = 0;
    let arr = str.split('');
    // console.log(arr);
    const vowelsCount = (acc, currentValue) => {
        if (currentValue === 'a') {
            return acc += 1
        } else if (currentValue === 'e') { 
            return acc += 1
        } else if (currentValue === 'i') {
            return acc += 1
        } else if (currentValue === 'o') {
            return acc += 1
        } else if (currentValue === 'u') {
            return acc += 1
        } else {
            return acc += 0
        }
    };
    let solution = arr.reduce(vowelsCount, 0)
    return solution;
}

console.log(getCount('saab'));
console.log(getCount('street'));
console.log(getCount('isi'));
console.log(getCount('poop'));
console.log(getCount('uwu'));

// split String /done
// compare values with desired values (vowels)
//     when values match ++vowelsCount
// return vowelsCount