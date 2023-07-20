// question : 0

// this function returns a promise which resolves in 2 secs
//that's the fetch

function fetchpokemon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "picachu", power: 20 });
    }, 2000);
  });
}

console.log("program started...");

// async function which a-wait until fetchpokemon function is completed
const asyncfun = async () => {
  const val = await fetchpokemon(); // the lines after this inside the func does not execute until the promise is resolved or rejected
  console.log(val);
  console.log("program completed!");
};

asyncfun();

// program when the promise is rejected in 2 sec using exception handling

const fetchpokemon = () => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       reject(new Error("danger danger !!"));
     }, 2000);
   });
 };
 
 console.log("program started");
 
 const usepokemon = async () => {
   try {
     const val = await fetchpokemon();
     console.log(val);
     console.log("done fecthing");
   } catch (error) {
     console.log(error);
   }
   console.log("we found an error");
 };
 
 
 usepokemon();


// question : 1

// just a simple user authentication program 

const fetchuser = () => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve({ user: "Monkey", admin: false });
     }, 3000);
   });
 };
 
 console.log("program started");
 
 function login(obj) {
   if (obj.admin == true) {
     console.log("succesful login !!");
   } else {
     console.log("failed to login!!.. please try again");
   }
 }
 
 const checkuser = async () => {
   const val = await fetchuser();
   login(val);
   console.log("program completed");
 };
 
 checkuser();
 

 // question : 2


 // working with two promises and two await calls

 const fetchfast = () => 
{
    return new Promise((resolve , reject) => 
    {
        setTimeout(() => {
             resolve("Fetch fast!! boom")
        }, 3000)
    })
}
const fetchslow = () => 
{
    return new Promise((resolve , reject) => 
    {
        setTimeout(() => {
             resolve("Fetch slowww!! booooooommmmmm")
        }, 6000)
    })
}

console.log('program started');


async function asyncfun()
{
    const result1 = await fetchfast();
    console.log(result1);
    const result2 = await fetchslow();
    console.log(result2);
    console.log('program completed!!!');
}

asyncfun()


// question : 3

// first getting a candy and then calculating the price of it using async and await

function getcandy() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve({ name: "dairymilk", quantity: 10 });
     }, 3000);
   });
 }
 
 function calcPrice(candy) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(candy.quantity * 10);
     }, 3000);
   });
 }
 
 const getPrice = async () => {
   const candy = await getcandy();
   console.log(candy);
   const price = await calcPrice(candy);
   console.log(`price : ${price}`);
   console.log("program completed");
 };
 
 console.log("program started");
 
 getPrice();
 


