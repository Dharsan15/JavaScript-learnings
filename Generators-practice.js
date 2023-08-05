// Generators 

// It is a function which yield certain values when it is called 
// It can have multiple yield values 


//question : 0

// Here we are yielding a value 

const counTo10 = function* () {
  let i = 0;

  while (i <= 10) {
    yield i;
    i++;
  }
};

const generatorobj = counTo10();

for (const val of generatorobj) {
  console.log(val);
}

// question : 1

// yielding infinite number of random number when it is called...
// This will not stop  yielding values until we are stopping it manually

const randomNumber = function* () {
  while (true) {
    yield Math.round(Math.random() * 10);
  }
};

const num = randomNumber();

let i = 0;

while (i <= 10) {
  console.log(num.next().value);
  i++;
}

// question : 2

// getting the required amount of random numbers within the given range

const randomNumber = function* (amount, min, max) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (max - min + 1) + min);
  }
};

const getrandom = randomNumber(5, 5, 10);

for (const val of getrandom) {
  console.log(val);
}

//question : 3

// generating a random number between 1 - 10 and taking a grocery item from the array and 
// yielding it 5 times 

const getrandomNumer = function* () {
  let i = 0;

  while (i < 5) {
    yield Math.floor(Math.random() * (11 - 1 + 1) + 1);
    i++;
  }
};

const grocerylist = function* () {
  const grocery = ["Avacado", "cookie", "milk", "soup", "soda"];
  let n = grocery.length;
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * grocery.length);
    let item = grocery.splice(index, 1)[0];
    yield item;
  }
};

const randomNumber = getrandomNumer();

const getgrocery = grocerylist();

for (let i = 0; i < 5; i++) {
  const num = randomNumber.next().value;
  const grocery = getgrocery.next().value;
  console.log(num, grocery);
}



