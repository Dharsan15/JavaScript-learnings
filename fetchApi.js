// question : 0

// request a webpage and print the page source

fetch("https://github.com/Dharsan15/To-Do-App.git")
.then((response) => response.json())
.then((html) => 
console.log(html)

)

//question : 1

// this url just return a json 
// we can use .json method to get a json otherwise 
//it returns a string

fetch("https:/jsonplaceholder.typicode.com/posts/1")
.then((res) =>
{
    return res.text();
}
)

.then((text) => {
    console.log(text);
})

//question : 2


