// creating an object and assinging the prototype of Array to the object's prototype

// An array in javascript is technically an object with indices as keys and elements as values and it has a length property

const array = [ "zero" , "one" , "two"];

const fakeArray = {
  0: "zero",
  1: "one",
  2: "two",
  length: 3,
};

fakeArray.__proto__ = Array.prototype;

fakeArray.map((val) => {
  console.log(val);
});

// exercise : 2

const store = {
  name: "null",
  stock: [
    {
      name: "candy",
      quantity: 100,
    },
    {
      name: "fruit",
      quantity: 7,
    },
    {
      name: "toys",
      quantity: 23,
    },
  ],
};

const mystore = {};

mystore.name = "My wonderful store";

mystore.__proto__ = store;

const yourstore = {};

yourstore.name = "Not my wonderful store";

yourstore.__proto__ = store;

mystore.stock[1].quantity = 300;

console.log(mystore.name , mystore.stock);
console.log(yourstore.name , yourstore.stock);

console.log(store.name , store.stock);

// exercise : 3

function Person(name) {
   this.name = name;
}

// const dharsan = Person("dharsan");

const tarun = new Person("tarun");

console.log(Object.getOwnPropertyNames(tarun));
