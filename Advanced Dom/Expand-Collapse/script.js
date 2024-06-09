const buttons = document.querySelectorAll(".expand-button")

buttons.forEach(button => button.addEventListener("click", () => {
    const cardBody = button.closest(".card-header").parentElement.children[1]
    if(button.innerHTML === "Expand"){
        cardBody.classList.add("show")
        button.innerHTML = "Collapse"
        return
    }
    if(button.innerHTML === "Collapse"){
        cardBody.classList.remove("show")
        button.innerHTML = "Expand"
        return
    }
    
}))


