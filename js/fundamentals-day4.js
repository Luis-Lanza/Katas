function accum(s) {
    const argument = s.split('');
    mumble = () => {argument.map((letter) => {
        return letter
    })};
}

console.log(accum('string'));



// retrieves String
// splits String
// loop each item 
//     Grab i letter
//     Capitalizes it
//     return item + item*i + '-'


// Best Answer 
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }