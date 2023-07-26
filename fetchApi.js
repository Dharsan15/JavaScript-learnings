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

// print the url of the image
// nested objects


fetch("https:/pokeapi.co./api/v2/pokemon/pikachu")
.then((response) => {
    return response.json();
})
.then((pokeimg) => {
    console.log(pokeimg.sprites.other["official-artwork"].front_default);
})

// question : 3

// getting image from the internet and save it in the current folder

import fs from 'fs/promises'

fetch("https://w.wallhaven.cc/full/6o/wallhaven-6oxgp6.jpg")
.then((img) => {
    return img.arrayBuffer();
})
.then(async (data) => {
   await fs.writeFile('wallpaper.png' , Buffer.from(data) );
    
})





