/* This tells us whenever the window gets resized

window.addEventListener("resize", () => {
    console.log("resized")
})


Window is the global object 
window.function can be written as function

*/

/* This creates a span element and gives it the value of Hello World and appends it as last item to our body
const element = document.createElement("span")
element.innerText = "Hello World"
document.body.appendChild(element)


document is just the html of our page
document.body gives you the body 
document.documentElement gives the html elements 
*/

const divWithId = document.getElementById("div-id")
divWithId.style.color = "red"
// id is unique
// prints null if not found

const divWithClass = document.getElementsByClassName("div-class")
console.log(divWithClass)
// this prints out a html collection of all the div-class 's 
// html collection is almost like an array, but not really
// prints empty html collection if not found

const divWithClassArray = Array.from(divWithClass)
divWithClassArray.forEach(div => div.style.color = "green")
// change html collection to array to use forEach 
// forEach div change color to green

divWithClass[0].style.color = "black"
// changes the color of the individual element in the html collection to black