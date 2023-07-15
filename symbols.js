// question : 0

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
  


