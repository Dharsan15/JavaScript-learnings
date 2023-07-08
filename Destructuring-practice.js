//question : 0

const jungle = ["monkey", "lion", "panda", "rabbit", "squirrel"];

const [, an1, an2] = jungle;

console.log(an1);
console.log(an2);

//question : 1
//object destructuring syntax

const snacks = {
  chips: { name: "Pringles", salty: true },
  candy: { name: "twizzlers", salty: false },
  chocolate: { name: "mars", salty: false },
};

//In destructuring objects the key should match the objects key
const { candy, fruit = { name: "banana", salty: false } } = snacks;

console.log(candy, fruit);

// question : 2

const store = new Map();

store.set("cup", 46);
store.set("candles", 121);
store.set("vases", 15);

// using array destructuring syntax getting both key and values of the map and printing it

for (const [key, val] of store) {
  console.log(`${key} => ${val}`);
}

// question : 3

// working with destructuring  parameters inside func

function myCalc(obj) {
  const { x, y, z } = obj;

  //can be also done in this method but it is not looks good nahh ;)
  {
    //   let x = obj.x;
    // let y = obj.y;
    // let z = obj.z;
  }

  return 5 * x - 2 * y - z;
}

const obj = { x: 100, y: 100, z: 100 };

console.log(myCalc(obj));
