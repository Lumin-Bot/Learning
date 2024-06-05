const URL = "https://jsonplaceholder.typicode.com/posts/"
const button = document.querySelector("button")

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

async function doStuff(){
    try{
    const response = await fetch(URL)
    if(response.ok){
        const users = await response.json()
        console.log(users.map(user => user.name))
    } else{
        console.log("Failure")
    }

    } catch(error){
        console.error("Error")
    }

}


button.addEventListener("click", doStuff)

// Send Data to the Server
async function doStuffs(){
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "New Post"
        })
    })
    const post = await response.json
    console.log(post)
}

doStuffs()