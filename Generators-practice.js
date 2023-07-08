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
