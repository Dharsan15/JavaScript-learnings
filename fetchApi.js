// question : 0

// request a webpage and print the page source

// fetch("https://github.com/Dharsan15/To-Do-App.git")
// .then((response) => response.text())
// .then((html) => 
// console.log(html)

// )

//question : 1


fetch("https:/jsonplaceholder.typicode.com/posts/1")
.then((res) =>
{
    return res.text();
   

}
)

.then((text) => {
    console.log(text);
})
