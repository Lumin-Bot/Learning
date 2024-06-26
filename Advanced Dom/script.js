const URL = "https://jsonplaceholder.typicode.com/posts/"
// const button = document.querySelector("button")

// Get Data from the Server
// fetch(URL).then(response =>{
//     return response.json()
// }).then(data => {
//     // Log the name of each of the users
//     // for(let i = 0;i < data.length; i++){

//     //     console.log(data[i].name)
//     // }
//     console.log(data.map(user => user.name))
// })

// Fetch data from this url
// Converts json array to javascript 


// Convert top to asnyc await

// async function doStuff(){
//     try{
//     const response = await fetch(URL)
//     if(response.ok){
//         const users = await response.json()
//         console.log(users.map(user => user.name))
//     } else{
//         console.log("Failure")
//     }

//     } catch(error){
//         console.error("Error")
//     }

// }

// button.addEventListener("click", doStuff)

// // Send Data to the Server
// async function doStuffs(){
//     const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "New Post"
//         })
//     })
//     const post = await response.json()
//     console.log(post)
// }

// doStuffs()


// fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(response => response.json()).then(comments => {
//     console.log(comments)
// })

// Event Loop
// function test(){
//     console.log("hi 1")
//     console.log("hi 2")
//     new Promise((resolve, reject) => {
//         resolve("hi promise")
//     }).then(message => console.log(message))
//     setTimeout(() => console.log("hi 3"), 10)
//     setTimeout(() => console.log("hi 4"), 0)
//     console.log("hi 5")
// }

// // setTimeOut runs after the entire call stack
// // Promise runs after the function is completed
// test()

// console.log("hi 6")

// Event Delegation 

// const buttons = document.querySelectorAll("button")

// document.addEventListener("click", ()=> {
//     console.log("Clicked Document")
// })

// document.body.addEventListener("click", ()=> {
//     console.log("Clicked Body")
// })

// buttons.forEach(button => {
//     button.addEventListener("click", e => {
//         console.log("Clicked Button")
//         e.stopPropagation()
//     })
// })

// Capturing: Furthest to Closest / Outside to Inside
// Example: Document to Body to Button  
// Bubbling: Closest to Furthest / Inside to Outside
// Example: Button to Body to Document


// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("clicked Button")
//     })
// })

// document.addEventListener("click", e =>{
//     if(e.target.matches("button")){
//         console.log("clicked Button")
//     }
//     console.log(e.target)
// })

// const newButton = document.createElement("button")
// newButton.innerText = "Button 5"
// document.body.append(newButton)


// newButton.addEventListener("click", ()=>{
//     console.log("clicked Button")
// })


// Browser Storage 
// Local Storage | Cookies            | Session Storage
// 10 MB         | 4KB                | 5MB
// Never Expire  | Manual Expiration  | Expire on tab close
// Cilent        | Cilent/Server      | Cilent
// Easy          | Hard               | Easy

localStorage.setItem("Name", "Jacky")
sessionStorage.setItem("Age", "23")
// Update Names 
localStorage.setItem("Name", "Kyle")
sessionStorage.setItem("Age", "24")

// localStorage.removeItem("Name")

console.log(localStorage.getItem("Name"))

// Januray 1st
const date = new Date(9999, 0 , 1).toUTCString()
const pastDate = new Date(1999, 0, 1).toUTCString()

document.cookie = `name=Jacky; expires=${date}`
document.cookie = `age=25; expires=${date}`
console.log(document.cookie)
document.cookie = `name=; expires=${pastDate}`
console.log(document.cookie)