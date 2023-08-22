// calling the same function inside itself is called recursion 

function add(a)
{
    if(a == 5)
    {
        return a;
    }
    
    add(a + 1);

    console.log(a);

}

add(0);