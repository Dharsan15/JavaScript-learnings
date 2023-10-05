// calling the same function inside itself is called recursion 

const arr = [1,2,3,4,5];

function sum(array , index)
{
   if(index == array.length - 1)
   {
       return array[index];
   }

    return array[index] + sum(array , index + 1);

}

const result = sum(arr, 0);

console.log(result);


