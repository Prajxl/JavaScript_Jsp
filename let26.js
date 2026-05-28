// 2.By using let 

let isUserAuthenticated=false
console.log("User authenticated?:", isUserAuthenticated)
{
  let userPassword ="jsp@123"
  console.log("Password:",userPassword)
}
// console.log("User Password",userPassword)
// REFERENCE ERROR : USERPASSWORD IS NOT DEFINED

isUserAuthenticated = true
console.log("User authenticated?:", isUserAuthenticated)
