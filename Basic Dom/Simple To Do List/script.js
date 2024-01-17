// Select all elements
const form = document.querySelector("#new-item-form")
const input = document.querySelector("#item-input")
const list = document.querySelector("#list")

// When I submit form add a new element

form.addEventListener("submit", e => {
    e.preventDefault()

    // Create a new element
    const element = document.createElement("div")
    element.innerText = input.value
    element.setAttribute("class", "list-item")
    
    // Add item to list
    list.appendChild(element)
    
    // Clear input
    input.value = ""
    
    // Setup event listener when clicked
    element.addEventListener("click", e =>{
        list.removeChild(element)
    })
    
})
