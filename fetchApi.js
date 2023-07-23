// question : 0

// request a webpage and print the page source

fetch("https://github.com/Dharsan15/To-Do-App.git")
.then((response) => response.text())
.then((html) => 
console.log(html)

)

