 //question : 0

 // A Promise is an object that represents an eventual completion or failure of 
 // an asynchronous operation 

const myPromise = new Promise((resolve , reject) =>
{
    setTimeout(() => {
        resolve("Program completed");
    }, 3000);
})


console.log('Program stared');
console.log(myPromise);
console.log('Program in progress');

myPromise.then((value) => 
{
    console.log('Program completed');
    console.log(myPromise);
})


// question :  1

// promise object which will resolve in 3sec and reject 2sec 
// which will execute first ? 

const myPromise = new Promise((resolve , reject) => 
{
    setTimeout(() => {
        resolve("Program completed");
        
    }, 3000);

    setTimeout(() => {
        reject("Program failed");
    }, 2000);
})


myPromise
.then((value) => {
     console.log(value);
})
.catch((value2) => {
    console.log(value2);
    console.log(myPromise);
})

console.log('program started');
console.log(myPromise);
console.log('program in progress');


// question : 2


// working with promise chaining
// chaining two or more promises using .then 
// helps to understand how promise chaining works
const myPromise = new Promise((resolve , reject) =>
{
    setTimeout(() => {
        resolve("step 1 completed");
       
    }, 2000);
})

myPromise.then((value) => {
    console.log(value);

    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("step 2 completed");
        },2000)
    })

  //  we can also simple return without a promise syntax because
  //  anything returned in a promise is treated as a promise
   
})

.then((value2) => {
    console.log(value2);
})



//question : 3


const myPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve({data : 'hello' , error : 'null'});
    },5000)
});

console.log('program started');
console.log(myPromise);
console.log('program in progress');


myPromise
.then((value) => {
    console.log(value);
   
    return new Promise((resolve , reject) => {
        setTimeout(() => 
        {
            resolve("First promise chain completed");

        },2000)
    })
})
.then((value) => {
    console.log(value);
})


myPromise
.then((value) => {
    console.log(value);
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            resolve("second promise chain completed");
        },5000)

    })
})
.then((value) => {
    console.log(value);
})



//question 4

// Resolve two promises at the same time

const myPromise = new Promise((resolve , reject) => 
{
    setTimeout(() => {
        resolve(10);
    }, 3000);
});


const myPromise2 = new Promise((resolve , reject ) => {
    setTimeout(() => {
        resolve(20)
    }, 5000);
})


