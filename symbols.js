// question : 0

// a symbol is  encapsulated inside an object 


// it cannot be viewed just like any other keys 

let baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey")

console.log(typeof baboon);
console.log(typeof gorilla);
console.log();

// question : 1

// creating own iterator to the object using symbol

const book = {
    name: "1984",
    author: "George orwell",
    year: 1948,
    rating: 4.5,
    genre: "science friction",
    movie: true,
    [Symbol.iterator]: function* () {
      const entries = Object.entries(book);
  
      for (const entry of entries) {
        yield entry;
      }
    },
  };
  
  for (const val of book) {
    console.log(val);
  }
  
//question : 2

// This time creating our own async generator to our object


const book = {
    name: "1984",
    author: "George orwell",
    year: 1948,
    rating: 4.5,
    genre: "science friction",
    movie: true,
  };
  
  book[Symbol.asyncIterator] = async function* () {
    const entries = Object.entries(book);
  
    for (const entry of entries) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(entry);
        }, 1000);
      });
    }
  };
  
  async function fun() {
    for await (const [key, val] of book) {
      console.log(`${key} => ${val}`);
    }
  }
  
  fun();
  

