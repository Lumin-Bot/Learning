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

/*
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
*/ 

/*
const dataAttributeElement = document.querySelector("[data-test]")
const divWithClasses = document.querySelectorAll(".div-class")
const input = document.querySelector("input")

console.log(input)

// querySelector outputs the first individual element
// querySelectorAll outputs all the matching elements in a NodeList

divWithClasses.forEach(div => (div.style.color = "red"))

// NodeList has forEach function 
*/

/* const btn = document.querySelector("[data-btn]")
// const input = document.querySelector("[data-input-text]")

btn.addEventListener("click", event =>{
    console.log(event)
})

input.addEventListener("input", event =>{
    console.log(event.target.value === "")
})

// variable.addEventListener("action", function)
// if you add another EventListener that has the same action, they will both run
// variable.removeEventListener("action", functionName)
// to use removeEventListener the function has to be named / defined 
 

const form = document.querySelector("[data-form]")

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("Submitted")

})

*/

// Add an anchor tag to the HTML and when its clicked prevent the default and somehing to the console
/*
const w3schools = document.querySelector(".website")

w3schools.addEventListener("click", e => {
    
    console.log("Unlucky")
    e.preventDefault()
})
*/
/*
const btn = document.querySelector("button")

btn.addEventListener("click", e => {
    console.log("Arrow This: ")
    console.log(this)
})

btn.addEventListener("click", function(e){
    console.log("Function This: ")
    console.log(this)
})


// this (scope)
// arrow function this is the window
// normal function this is the location of where the function is called
// use arrow function 
// not use this instead use e.target
*/ 

/* 
const test = document.querySelector("[data-test]")
test.dataset.test = "5555" 
*/

// key value pairs

/* 
const buttons = document.querySelectorAll("button")

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        const currentClicks = parseInt(button.dataset.clicks)
        
        button.dataset.clicks = currentClicks + 1
    })
}) 
*/

// Everytime you click the button the number gets saved in the data attribute


/* 
const grandParent = document.querySelector("#grandparent")
const parentOne = grandParent.children[0]
const parentTwo = parentOne.nextElementSibling
const childOne = parentOne.children[0]
const childTwo = parentOne.children[1]

grandParent.style.color = "red"
parentOne.style.color = "green"
parentTwo.style.color = "orange"
 */

// .children will print a HTML collection of the whatever is inside it

/* 
const childOne = document.querySelector("#child-one")
const parentOne = childOne.parentElement
const grandParent = childOne.closest(".grand-parent")

childOne.style.color = "red"
parentOne.style.color = "green"
grandParent.style.color = "red"
 */

// .parentElement will give the parent of the current element
// .closest(class or id) will give the closest class or id to the current element 

/* 
const grandParent = document.querySelector("#grand-parent")
const children = document.querySelectorAll(".child")

children.forEach(child => child.style.color = "brown") 
*/

// 