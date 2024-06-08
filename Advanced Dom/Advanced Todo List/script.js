const form = document.querySelector("#new-todo-form")
const input = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")

const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST-"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos()
todos.forEach(renderToDo)

// Complete Todos
list.addEventListener("change", e =>{
    if(!e.target.matches("[data-list-item-checkbox]")) return
    
    // Get that todo that is clicked on 
    const parent = e.target.closest(".list-item")
    const todoId = parent.dataset.todoId
    const todo = todos.find(t => t.id === todoId)
    todo.complete = e.target.checked
    // Toggle the complete property to be equal to the checkbox value
    // Save updated todo
    saveTodos()
})  

// Delete Todos
list.addEventListener("click", e => {
    if(!e.target.matches("[data-button-delete]")) return

    const parent = e.target.closest(".list-item")
    const todoId = parent.dataset.todoId
    // Remove the todo from the screen
    parent.remove()
    // Remove the todo from the list
    todos = todos.filter(todo => todo.id !== todoId)
    // Save the new todos
    saveTodos()
})



// Add Todos
// User will type in todo and click add todo button. 
form.addEventListener("submit", e =>{
    e.preventDefault()

    const todoName = input.value
    
    if(todoName === "") return

    const newTodo = {
        name: todoName,
        complete: false,
        id: new Date().valueOf().toString()
    }

    todos.push(newTodo)
    renderToDo(newTodo)
    saveTodos()
    input.value = ""

    
})

// This should then add the todo to your list above. 
function renderToDo(todo){
    const templateClone = template.content.cloneNode(true)
    const listItem = templateClone.querySelector(".list-item")
    listItem.dataset.todoId = todo.id
    const textElement = templateClone.querySelector("[data-list-item-text]")
    textElement.innerText = todo.name
    const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
    checkbox.checked = todo.complete
    list.appendChild(templateClone)
}

// Save Todos
function saveTodos(){
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))

}

// Load Todos
function loadTodos(){
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todosString) || []
}





