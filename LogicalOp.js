
print = console.log.bind();

//Logical Operator

let userName = "user111"
let password = "user@111"

const auth = userName === "user111" && password === "user@111" ? "Welcome to Home Page" : " Please Check username and password"
print(auth)

// Taking Input using User - Actually using Html but now if we dont have html

const prompt = require("prompt-sync")({sigint:true})
let userInput =prompt("Enter your input :")
print(userInput)