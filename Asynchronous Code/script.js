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

// Promise.all([
//     Promise.resolve("1"),
//     Promise.resolve("3"),
//     Promise.resolve("2")
// ])
// // Promise.all([])
// // All have to resolve otherwise it will run reject on the very first one

// // Successful Promise
// Promise.resolve("value").then(message => console.log(message))

// // Failed Promise
// Promise.reject("value").catch(message => console.error(message))

// Promise.any([])
// Very first promise that succeeds

// Promise.race([])
// The first promise that is called whether resolve or reject

// Promise.allSettled([])
// Waits for all the promises to run then shows all statuses of each promise 


function setTimeoutPromise(delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You waited ${delay} milliseconds`)
        }, delay)
    })
}

// setTimeoutPromise(250).then(() => {
//     console.log("1")
// })

// async function doStuff(){
//     try{
//         const message = await setTimeoutPromise(250)
//         console.log(message)
//         console.log("1")
//         const message2 = await setTimeoutPromise(250)
//         console.log(message2)
//         console.log("2")
//     } catch(error){
//         console.error("Error")
//     }

// }

// doStuff()



function getValueWithDelay(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

function getValueWithDelayError(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error")
        }, delay)
    })
}

// Call getValueWithDelay twice and print out the returned value
// Then call getValueWithDelayError and make sure that the error is properly caught

async function doProblem(){
    try{
        const message = await getValueWithDelay(10, 250)
        console.log(message)
        const message2 = await getValueWithDelay(20, 250)
        console.log(message2)
        const message3 = await getValueWithDelayError(30, 250)
        console.log(message3)
    } catch{
        console.error("Oops")
    }

}


doProblem()