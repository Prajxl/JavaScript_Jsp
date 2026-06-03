
// Print even numer 1 to 10

const n = require("prompt-sync")({sigint:true})
for(let i=0;i<n;i++)
{
  if(i%2==0)
  {
    console.log(i)
  }
}                     

// for of - Used to iterate over array in js
const cart = ["Bat","Mobile Charger","shoe","laptop","chair"]
for(let item of cart){
  console.log("In cat there is: ",item)
}


console.log("----------------------------------------------------------------")


//for in - used to iterate over objects in js

const user = {
  username : "Prajwal",
  password : "Jsp@123",
  role : "user",
  doc : "27-05-2026",
  dp : "source.webp"
}

for(let i in user)
{
  console.log(i, ":",user[i])
}

console.log("----------------------------------------------------------------")

//While-Loop

//write a js program to print numbers from n to -n

const prompt = require("prompt-sync")({sigint:true})
let d = prompt("Enter n : ")
let i=d;
while(i >= -d)
{
  console.log(i)
  i--;
}

console.log("----------------------------------------------------------------")


// do while

let j=10
do{
  console.log("Im do do while", j)
  j++
}while(j<=9)

  //map
  //forEach()