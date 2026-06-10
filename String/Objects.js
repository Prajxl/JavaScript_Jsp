const Student = {
  name: "Prajwal",
  place: "Banglore",
  degree: "BE",
  stream : "Computer Science",
  skill : "Java full stack ",
  yop : 2026,
  contact : 9995297416
};

// // 1 Key() - Returns all keys og given object into an array
// console.log("All keys of student object :" , Object.keys(Student))

// // 2. values() - 
// console.log("All values of Student : ",Object.values(Student))

// // 3. entries() - Returns an array of Objects properties
// console.log("Entries of Student : ", Object.entries(Student))

// console.log(Object.entries(Student).flat(1)) // Flattening array
// console.log(Object.entries(Student).flat(Infinity)) // when we dont know dept of levels

// // 4. assign() - Copies Object properties from source object to target object.

// const newUpdates = {
//   cgpa : 8.3,
//   isSemCompleted : true
// };

// Object.assign(Student,newUpdates)
// console.log("Updates student details : ", Student)


// // spread operator for merging obj properties
// console.log({...Student, isCertificateIssued : false})
// console.log({Student, isCertificateIssued : false})

// 5. seal() - Prevents adding new property and deleting existing properties . but modification is allowed
 
// Object.seal(Student)
// Student.college = "xyz college of engineering"
// Student.name="Prajwal K"
// console.log(Student)

// // 6 .freeze() - Prevents an object from adding new property , deleting exisiting properties and modification

// Object.freeze(Student)
// Student.college = " JSpiders institiue"
// Student.name="Prajwal"  // No modificatin ,adding, deleting 
// console.log(Student)

// Destructuring - its an mechanism in javascript es6 module , to Unpacking the values into distinct variable
//Array

// const cart = [
//   "Bottle",
//   "Laptop",
//   "Mobile",
//   "Marker",
//   "Mobile",
//   "Chair",
//   "Mobile"
// ];

// const [one , two , three, ...remaining] = cart;
// console.log("First item in cart ==>",two)
// console.log("remaining cart items : ",remaining)

// // Object
// const {name,place,degree} = Student;
// console.log("Student name : ",name)

// JSON methods --only 2 methods--------------------------------------------------------------

// 1 . stringyfy() - converts an js Object into json string .

const stdJson = JSON.stringify(Student)
console.log(stdJson)


// 2. parse() - Converts an json data into an js object ( in json wrap with double quote)

let institiue = `{
  "name" : "Jspiders",
  "location" : "BTM Layout",
  "Course" : "JFD",
  "staff" : 30
}`;
console.log(JSON.parse(institiue));

