export const me = {
    name: "Jacky",
    age: 22
}

export const kyle = {
    name: "Kyle",
    age: 23
}

export default function printUser(user){
    console.log(`Name: " ${user.name}`, `Age: ${user.age}` )
}



// You can only have one default export