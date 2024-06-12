const me = {
    name: "Jacky",
    age: 22
}

const kyle = {
    name: "Kyle",
    age: 23
}

function printUser(user){
    console.log(`Name: " ${user.name}`, `Age: ${user.age}` )
}

// You can only have one default export

module.exports = {
    me: me,
    kyle: kyle,
    printUser: printUser
}