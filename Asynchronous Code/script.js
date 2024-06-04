// Callbacks
// setTimeout(() => {
//    console.log("hi") 
// }, 1000);

// // Asynchronous code runs at a later time 

// const button = document.querySelector("button")
// button.addEventListener("click", e =>{
//     console.log("clicked")
// })

// // Event listener is also asynchrous code 
// // AKA Callbacks

// setTimeout(() => {
//     console.log("hi 1")
//     setTimeout(() => {
//         console.log("hi 2")
//         setTimeout(() => {
//             console.log("hi 3")
        
//         }, 100);
//     }, 100); 
// }, 100);

// // Callback Hell 
// // Nested Callbacks in Callbacks


// Promises 
// const promise = new Promise((resolve, reject) =>{
//     const sum = 1 + 2   
//     if(sum === 2){
//         resolve("Success")
//     } else{
//         reject("Error")
//     }
// })

// promise.then(message => {
//     console.log(message)
// })
// .catch(message => {
//     console.error(message)
// })


// setTimeout(() => {
//     console.log("here")
// }, 1000);

// setTimeoutPromise(250).then(() => {
//     console.log("1")
//     return setTimeoutPromise(250)
// })
// .then(() => {
//     console.log("2")
//     return setTimeoutPromise(250)
// })
// .then(() =>{
//     console.log("3")
// })

// function setTimeoutPromise(duration){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })
// }


// Create a promise verison of addEventListener

// const button = document.querySelector("button")
// function addEventListenerPromise(element, method){
//     return new Promise((resolve, reject) => {
//         button.addEventListener(method, resolve) 
//     })
// }

// addEventListenerPromise(button, "click").then(e=> {
//     console.log("clicked")
// })

Promise.all([
    Promise.resolve("1"),
    Promise.resolve("3"),
    Promise.resolve("2")
])
// Promise.all([])
// All have to resolve otherwise it will run reject on the very first one

// Successful Promise
Promise.resolve("value").then(message => console.log(message))

// Failed Promise
Promise.reject("value").catch(message => console.error(message))

// Promise.any([])
// Very first promise that succeeds

// Promise.race([])
// The first promise that is called whether resolve or reject

// Promise.allSettled([])
// Waits for all the promises to run then shows all statuses of each promise 