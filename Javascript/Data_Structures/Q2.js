// Create a student object with the following properties:
// name, age, email, and a nested address object (city, postalCode)
// Add a new property called course with value "Web Development"
// Update the student's email
// Delete the age property
// Display all keys and values of the final object

let student = {
    name:"shanuka",
    age:22,
    email:"shanuka@exmapl.com",
    address:{
        city:"Colombo",
        postalcode:"100100"
    }
};

console.log("Orginal Student",student);

student.course = "Web Development";
console.log("Add new couse property with full array",student);

student.email = "shanuka.web@dev.com"
console.log("Update the email",student);

delete student.age;
console.log("After deleteing object",student);

console.log("Final Student Object:", student);
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
