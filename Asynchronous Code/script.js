setTimeout(() => {
   console.log("hi") 
}, 1000);

// Asynchronous code runs at a later time 

const button = document.querySelector("button")
button.addEventListener("click", e =>{
    console.log("clicked")
})

// Event listener is also asynchrous code 
// AKA Callbacks

setTimeout(() => {
    console.log("hi 1")
    setTimeout(() => {
        console.log("hi 2")
        setTimeout(() => {
            console.log("hi 3")
        
        }, 100);
    }, 100); 
}, 100);

// Callback Hell 
// Nested Callbacks in Callbacks
