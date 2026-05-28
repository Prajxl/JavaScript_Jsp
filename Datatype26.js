

// 1 . String
// Sequence of characters enclosed within double quotes
// Quotes - '',"",``(BackTicking)


print = console.log.bind()

let username = 'Jspiders'
print("Username : ", username)

let student = "jspider's students"
print("We are :",student)

let location = `BTM Layout`
print("Location: ", location)

print("We are"+student+","+"Located in"+location)

//( BackTicking method will provide) : Template Literal Method - which is known as String Interpolation method

print (typeof(username),typeof(location),typeof(student))

print(`We are ${student} , ${username} and located in ${location}`)

print("-------------------------------------------------------------------")

const num = 1234
print("Number: ",num)

print(typeof(num))

const decNum =9.8
print("Gravity:",decNum)
print(typeof(decNum))

const someNum=1234
print("some number :",someNum)

//const beginWithZero = 0845
const beginWithZero = 0.845
print("Begin with Zero ", beginWithZero)
// Output : Begin with Zero  845
// Output : Begin with Zero  0.845

// Limitation only 16 digits are allowed (no more than that if more it behave abnormaly)\
const number = 1234567887654321
print("Correct Number size 16: ", number)

// Output : Correct Number size 16:  1234567887654321

const numbers = 123456789987654321
print("Correct Numbersize 18: ", numbers)
//output : Correct Number:  123456789987654320


//BigInt
print("-------------------------------------------------------------------")
print("3.BigInt")


const bigNum = BigInt("12345678901234567890")
print("BigNumber: ",bigNum)
print(typeof(bigNum))
//output : BigNumber:  12345678901234567890n

const bigNum2 = 123456789012345678901234567890n
console.log("Bigint 2 :",bigNum2)
print(typeof(bigNum2))


print("-------------------------------------------------------------------")
print("4.Boolean")

let isUserValid=true;
print("Is User Valid ? : ",isUserValid)

print(isUserValid ? "Welcome to DashBoard":"Please enter Valid Credentials");

isUserValid=false;
print(isUserValid ? "Welcome to DashBoard":"Please enter Valid Credentials");



print("-------------------------------------------------------------------")
print("5.Undefined")
// Undefined - Variables without value are known as undefined.
// Here Only declaration will be done but no intialisation occurs.

let salary
print("Your salary should be :",salary)
print(typeof(salary))
//Output : Your salary should be : undefined

print("-------------------------------------------------------------------")
print("6.Null")

// Null - It is non-existing Object.
// Which represents unkown,empty or nothing.
// Intentionally making value as absent.
// alreadt millions or billions of company websites will get error if remove the null

let age=null
print(typeof(age))
print("My age is",age)

print("-------------------------------------------------------------------")
print("7.Object")

const user = {
  username : "Prajwal",
  password : "Jsp@123",
  role : "user",
  doc : "27-05-2026",
  dp : "source.webp"
}

print("User Info : ",user)

//Accessing Value from Object
print("Username : ",user["username"])
print("Role of User : ",user.role)
let permission = user.role === "admin" ? "Full acess granted " : "No acess granted"
print(permission)

//Modification of value

user.password="JSP321"
print("Updated user : ",user)
user.isActive = false
print("Again updated",user)

// Deleting the propery of user 

delete user.dp
print(user)

console.table(user)

