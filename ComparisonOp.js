
print = console.log.bind();


//Comparison Operator - == , === , != , > , < , >= , <= ,  ?  , !==

let a = 100;
let b = "100";
let c = 101;
let d = "101";

print(" a == b : ",a==b)
// out put : true == compares values not care about datatype of variable
print(" a === b : ",a===b)
// out put : false === compares values and care about datatype of variable
print(" c !== d : ", c!==d)

print("--------------------------------------------------------------------------")

// Ternary Operator - ?
// Condtion ? stat1 : stat2
let age=20
let res = age >18 ? "Adult" : "Below Age"
print(res)
print(`Entered the age is ${res} : ${res}`)

