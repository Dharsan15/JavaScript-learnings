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

const getrandomNumer = function* () {
  let i = 0;

  while (i < 5) {
    yield Math.floor(Math.random() * (11 - 1 + 1) + 1);
    i++;
  }
};

const grocerylist = function*() {
    let i = Math.floor(Math.random() * 5);
    const grocery = ['Avacado' , 'cookie' , 'milk' , 'soup' , 'soda']
    yield grocery.splice(i , 1);
    
}

const Obj = getrandomNumer();

const obj2 = grocerylist();



for (const val of Obj) {
  console.log(val);
}

for(const val of obj2)
{
    console.log(val);
}


