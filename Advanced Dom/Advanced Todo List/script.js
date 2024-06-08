const form = document.querySelector("#new-todo-form")
const input = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")

const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST-"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()
todos.forEach(renderToDo)

list.addEventListener("change", e =>{
    if(!e.target.matches("[data-list-item-checkbox]")) return
    
    // Get that todo that is clicked on 
    // Toggle the complete property to be equal to the checkbox value
    // Save updated todo

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

// Delete Todos
// Complete Todos


