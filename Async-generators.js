//ASYNC GENERATORS

//async generators will yield promises when it is called

// question : 0
// async generator to return a random number infinitely

const asyncgenerator = async function* () {
  while (1) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        let number = Math.floor(Math.random() * 9);
        resolve(number);
      }, 1000);
    });
  }
};

const asynGenObj = asyncgenerator();

async function asyncfun() {
  for await (const promise of asynGenObj) {
    console.log(promise);
  }
}

asyncfun();

// question : 1

// generator function which return either of two promises of which one resolve in .5 sec
// and 3 sec and it should run infinetly

const asyncGenfun = async function* () {
  while (1) {
    const val = Math.floor(Math.random() * 2);

    if (val == 0) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Fast");
        }, 500);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("slow");
        }, 3000);
      });
    }
  }
};

const asyncGen = asyncGenfun();

async function asyncfun() {
  for await (const promise of asyncGen) {
    console.log(promise);
  }
}

asyncfun();

//question 2:

// a generator function which takes a string and prints * if a letter is a vowel
// and prints the same letter in UC if it is a consonant

const asynGenFun = async function* (string) {
  for (const char of string) {
    let a = char.toLowerCase();

    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
          resolve("*");
        } else {
          resolve(a.toUpperCase());
        }
      }, 100);
    });
  }
};

const asyncobj = asynGenFun("monkey is the coolest animal");

async function funnn() {
  for await (const promise of asyncobj) {
    console.log(promise);
  }
}

funnn();

//question : 3

// async generator for printing the time taken for it to resolve and each time multiply it by 2

const asyncGenfun = async function* (time) {
  while (1) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });

    time = time * 2;
  }
};

const asycObj = asyncGenfun(100);

async function fun() {
  for await (const promise of asycObj) {
    console.log(promise);
  }
}

fun();
