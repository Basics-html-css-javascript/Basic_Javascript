let student = {
    name:"shanuka",
    age:22,
    subjects:["Math","Science"],
    address:{
        city:"Colombo",
        country:"Sri Lanka"
    }
};

// Dot notation
console.log("Name: ",student.name);

// Bracket notation
console.log("Age: ",student["age"]);

// Add new property
student.grade = "A";
console.log("After adding grade: ",student);

//update age
student.age=23;
console.log("After updating age: ",student);

// Delete property
delete student.grade;
console.log("After deleting grade: ",student);

// List all keys
console.log("Keys: ",Object.keys(student));

// List all values
console.log("Values: ",Object.values(student));