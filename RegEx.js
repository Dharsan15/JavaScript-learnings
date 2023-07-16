//question : 0

const str = 'What is this? an ant'

const pattern = /ant/i;

let test = pattern.test(str);
let match = str.match(pattern)

console.log(test);

console.log(match);