//Built in Methods
// 1. toUpperCase()

const insta = "Prajxl"
console.log("Converted to Uppercase ==>", insta.toUpperCase())

// 2. toLowerCase()

const name = "PRAJWAL"
console.log("Converted toLowercase ==>", name.toLowerCase())

//3.length

console.log("Length of String ==>",insta.length)

//4. concat() - combines multiple strings and rerturns new string.

let insta2 = insta.concat(" Java Developer")
console.log("Combined String ==> ",insta2)

// 5.Slice()
let sliced=insta2.slice(1,9)
console.log("Sliced new string ==>", sliced)
fjfjfjfj
// 6. replace
let res = insta2.replace("Developer","Software engineer")
console.log("Replcaed string ==>",res)

//7. split() - splits the given string into an array
let splited = insta2.split(" ")
console.log("Splitter string ==> ",splited)
console.log("Split Array ", name.split(""))

//----------------------------------------------------------------------------------------

// Q>1. write a program to reverse a given string using buil in methods
// hint : split,reverse,join


let name2="Prajwal"
console.log("Reversed",name2.split("").reverse().join(""))

// 8.trim() - Removes white space from both side of the string.

const newStr = "          Hello      "
console.log("New String ==> ", newStr)
console.log("Trimmed String ==>",newStr.trim())

//9. padStart() - Adds the given string before the original string based on given length.



// const prompt = require("prompt-sync")({sigint: true})
// const userMob = prompt("Enter your 10 digit mobile number: ")
// const len = userMob.length

// // 2. ensure mobile is 10 digit only or thorugh error

// if(userMob.length!==10)
// {
//   console.log("Please enter 10 digit")
// }else{
//   //3. extract firstt 6 difit 
//   const lastFOurDigit = userMob.slice(6)
//   //4. apply padStart
//  console.log( lastFOurDigit.padStart(len,"*"))
// }

// 10. padEnd()


// indexOf() - returns the index of the given character.

// 12.Last indexOf

let str = "Prajwal";
console.log("First Occurance : ",str.toLowerCase().indexOf("l"))
console.log("Last Occurance: ",str.toLowerCase().lastIndexOf("a"))

// 13. charAt() - returns the character which is present at specified index
console.log(str.charAt(7))

// 14. charCodeAt() - Returns the Ascii value of character which is present at specified index.
console.log(`ASCII value of character at index 10=> , ${str.charAt(2)} => ${str.charCodeAt(2)}`)

// 15 . includes
console.log(str.includes("wa"))


// 16. startsWith() - Checks weather string starts with given pattern or not returns boolean value.
console.log(str.startsWith("pra")) 