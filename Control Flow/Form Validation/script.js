// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form")
const errors = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirmation")
const terms = document.querySelector("#terms")
var errorMessages = []
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", e =>{

//    TODO: Create an array to store all error messages and clear any old error messages
  
  console.log(errorMessages)
  clearErrors()

//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
  if(username.value.length < 5){
    errorMessages.push("username")
  }
//      2. Ensure the password is at least 10 characters long
  if(password.value.length < 9){
    errorMessages.push("passwordLength")
  }
//      3. Ensure the password and confirmation password match
  if(password.value !== passwordConfirm.value){
    errorMessages.push("passwordMatch")
  }
//      4. Ensure the terms checkbox is checked 
  if(terms.checked === false){
  errorMessages.push("checkbox")
}
//    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length > 0) {
    showErrors(errorMessages)
    e.preventDefault()
  }
 
  console.log(errorMessages)
})
// TODO: Define this function
function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
  
    while(errorsList.hasChildNodes()){

      errorsList.removeChild(errorsList.firstChild)
      errorMessages.pop()
    }
    errors.classList.remove("show")
    
  }
  
  // TODO: Define this function
  function showErrors(errorMessages) {
    // Add each error to the error-list element
    // Make sure to use an li as the element for each error
    // Also, make sure you add the show class to the errors container
    if(errorMessages.length !== 0){
      errors.classList.add("show")
    }

    if(errorMessages.includes("username")){
      var usernameError = document.createElement("li")
      usernameError.appendChild(document.createTextNode("Username must be at least 6 characters long"))
      errorsList.appendChild(usernameError)
    }

    if(errorMessages.includes("passwordLength")){
      var passwordError = document.createElement("li")
      passwordError.appendChild(document.createTextNode("Password must be at least 10 characters long"))
      errorsList.appendChild(passwordError)
    }
    
    if(errorMessages.includes("checkbox")){
      var checkboxError = document.createElement("li")
      checkboxError.appendChild(document.createTextNode("You must accept the terms"))
      errorsList.appendChild(checkboxError)
    }
    
    if(errorMessages.includes("passwordMatch")){
      var passwordMatch = document.createElement("li")
      passwordMatch.appendChild(document.createTextNode("Passwords must match"))
      errorsList.appendChild(passwordMatch)
    }
  }

 
  