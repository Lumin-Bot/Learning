// Create an variable that contains an array
// using an if statement with else if I want you to check the length of the array
// If it is empty print out "empty"
// If it has less than 5 elements print out "small"
// If it has less than 10 elemetns print out "medium"
// Otherwise print out "large"

/* 
const array = [1,1231,123,123,1,1,]

console.log(array)
if(array.length == 0){
    console.log("empty")
} else if(array.length < 5){
    console.log("small")
} else if(array.length < 10){
    console.log("medium")
} else{
    console.log("large")
}
 */

// Ternary Operator

// const isUserLoggedIn = true

/* 
if(isUserLoggedIn){
    console.log("logged in")
} else{
    console.log("not logged in")
} 

isUserLoggedIn ? console.log("logged in") : console.log("not logged in")
*/
// condition ? if it mets that condition : else condition 


// const welcomeMessage = isUserLoggedIn ? console.log("Welcome") : console.log("Please Log In")

/* 
const favAnimal = "cat"

if(favAnimal === "cat"){
    console.log("cats are pretty cool")
} else if(favAnimal === "dog"){
    console.log("they are kinda loud")
} else if(favAnimal === "shark"){
    console.log("that is kinda interesting")
} else{
    console.log("that is cool, but idk that animal")
}

switch(favAnimal){
    case "cat":
        console.log("cats are pretty cool")
        console.log("another log")
        break
    case "dog":
        console.log("they are kinda laoud")
} 
*/

// const number = 5

// Create a swicth that checks to see the value of the number var
// If the number is 0 print "it is zero"
// If the number is 1 or 2 print "it is small"
// If the number is 3 or 4 print "it is medium"
// If the number is 5 print "it is large"
// If the number is none of these print "try again"


/* 
switch(number){
    case 0:
        console.log("it is zero")
        break
    case 1:
    case 2:
        console.log("it is small")
        break
    case 3:
    case 4:
        console.log("it is medium")
        break
    case 5:
        console.log("it is large")
        break
    default:
        console.log("try again")
} 
*/

/* 
for (let i = 0; i < 5; i++){
    console.log("hi")
} 
*/

// for loop:
// a variable for starting 
// an ending point
// how to modify our variable


// Create a for loop that loops from 0 to 10 and prints all values from 0 to 10
// Modify this loop and exit the loop when the value is equal to 5 by using break

for(let i = 0; i <= 10; i++){
    
    if(i == 5){
        break
    }
    console.log(i)
}