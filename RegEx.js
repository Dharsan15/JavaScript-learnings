//question : 0

// regular expressions are used to used some patter matching 

const str = 'What is this? an ant'

const pattern = /ant/i;

let test = pattern.test(str);
let match = str.match(pattern)

console.log(test);

console.log(match);

//question : 1

// checking of a .com on the end of a string to verify email

const email = 'monkey@tress.com';

const emailPattern = /\.com$/;

const match = email.match(emailPattern)

console.log(match);

