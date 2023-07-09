//question : 0

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

// printing random number everytime when it is called...

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

