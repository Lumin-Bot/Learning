const form = document.querySelector("#new-todo-form")
const input = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")


// Add Todos

// User will type in todo and click add todo button. 

form.addEventListener("submit", e =>{
    e.preventDefault()

    const todoName = input.value
    
    if(todoName === ""){
        return
    }

    // Render todo
    renderToDo(todoName)
    input.value = ""

    
})

// This should then add the todo to your list above. 

function renderToDo(todoName){
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector("[data-list-item-text]")
    textElement.innerText = todoName
    list.appendChild(templateClone)
}








// Delete Todos
// Complete Todos
// Save Todos
// Load Todos
