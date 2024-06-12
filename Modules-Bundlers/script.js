// import printUser,  {me as jacky, kyle} from "./test.js"


// console.log(jacky)
// console.log(kyle)

// printUser(jacky)

const userExport = require("./test.js")
const me = userExport.me
const kyle = userExport.kyle
const printUser = userExport.printUser

console.log(me, kyle)