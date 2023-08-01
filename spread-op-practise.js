//question : 0

// this is a modern javascript syntax Es6 features

// we are here copying an array and putting in another array

const arr = [1,2,3,4,5]

const arrCopy = [...arr , 6,7];

console.log(arrCopy);


// question : 1
// getting more on copying the iterables


const arr = [[10,20,30] , [40,50,60]]

const arrCopy = [...arr];

arrCopy[0].pop();
arrCopy[1][0] = 80;

// this doesnt reflect in arr because we are adding a new value not modiying the existing values

// here we are putting a value in copy not on the original array
arrCopy.push([9,9]);
console.log(arr);
console.log(arrCopy);


// question : 2

// getting deeper understanding of shallow copy 
// it only works with non primitve data types 
// because arrays , objs are passed as references and other are passed as copies


const animal =
 {
    name : 'tiger',
    kingdom : 'usa',
    cute : true,
    friends : [{name : 'lion' , kingdom : 'India'}]
}

let koala = {...animal , tall :  false};



animal.cute = false;
animal.kingdom = 'america'


koala.friends[0].cute = false;
console.log(animal);
console.log(koala);


// question : 3

const superhero = 
{
    name : 'Robert downey jr.',
    alias : 'Iron man',
    universe : 'MCU',
    happy : false,
    enemies : ['thanos' , 'loki'],
    bestmovie : {title : 'Iron man 1' , rating : 8}
}

const superheroCopy =
{
    ...superhero,
    enemies : [...superhero.enemies , 'winter soldier'],
    bestmovie : {...superhero.bestmovie , year : 2008}
}

console.log(superhero);
console.log(superheroCopy);
