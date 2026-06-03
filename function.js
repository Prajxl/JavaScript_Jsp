
const prompt = require("prompt-sync")({sigint:true})
const print = console.log.bind()

// 1. Named Function
function Joel(user)
{
  console.log(`Hello ${user}, Good Evening...`)
}

Joel('Prajwal')

print("------------------------------------------------------------")

// Anonymous function / function  expression

const anoFun = function()
{
  console.log("This is Anonymous function")
}
anoFun()

print("------------------------------------------------------------")


const  userAuth = function(username,password)
{
  if(username === "Prajwal" && password === "jsp@123"){
 const userObj =new Object()
 userObj.username=username
 userObj.password=password
 console.log("user credentials: ",userObj)
}else{
  print("Invalid credentials..")
}
};

// const uName = prompt("Enter username : ");
// const upass = prompt("Enter password : " );
// userAuth(uName,upass)

// Arrrow Function

const myFun = () =>{
  print("ArrowFunction")
}

myFun()

const arrFun = type => print(`Hello...i'm an ${type} function.`);
arrFun("Arrow")

// 1.Passing MultipleParameters - rest Parameters  : '...nums' instead of writing multiple parameters a,b,c,d,e,f , it converts each and every argument into an array
// 2. function with return
// 3.default parameters
// 4. Exporting and Importing modules

const add = (...nums) =>{
  print(nums)
  let res=0  
  for(let i of nums)
  {
    res += i;
  }
  // print(res)
  return res
};
              

const output = add(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
console.log("The Addition of first 15 natural Numbers : ",output)