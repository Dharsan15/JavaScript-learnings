//question : 0

const jungle = ['monkey' , 'lion' , 'panda' , 'rabbit' , 'squirrel']

const [, an1 , an2] = jungle;

console.log(an1);
console.log(an2);

//question : 1
//object destructuring syntax 

const snacks = {
    chips : {name : 'Pringles' , salty : true},
    candy : {name : 'twizzlers' , salty : false},
    chocolate : {name : 'mars' , salty : false}
 }
 

 //In destructuring objects the key should match the objects key
 const {candy , fruit = {name : 'banana' , salty : false}} = snacks;
 
 console.log(candy , fruit);
 
 
 
 