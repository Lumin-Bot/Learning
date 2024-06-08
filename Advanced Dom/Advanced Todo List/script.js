const form = document.querySelector("#new-todo-form")
const input = document.querySelector("#todo-input")
const listItem = document.querySelectorAll("#list-item")
const list = document.querySelector("#list")
// Add Todos

// User will type in todo and click add todo button. 

form.addEventListener("submit", e =>{
    e.preventDefault()

    const element = document.createElement("div")
    element.innerText = input.value
    element.setAttribute("class", "list-item")
    element.setAttribute("class", "list-item-label")
    
    // Add item to list
    list.appendChild(element)
    
    // Clear input
    input.value = ""
    
    // Setup event listener when clicked
    element.addEventListener("click", e =>{
        list.removeChild(element)
    })
    
})

// This should then add the todo to your list above. 







// Delete Todos
// Complete Todos
// Save Todos
// Load Todos
