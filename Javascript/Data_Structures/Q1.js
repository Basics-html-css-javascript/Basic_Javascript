// Write a program to:
// Create an array of marks: [60, 85, 70, 95, 50]
// Add 100 at the end of the array
// Remove the first mark
// Count how many marks are above 75
// Find the average of all marks
// Display the final array and the average

let marks = [60,85,70,95,50]; 
marks.push(100);
console.log("After Adding mark : ",marks);

// Remove last mark
marks.pop();
console.log("After Delete last element: ",marks);

marks.shift();
console.log("Remove first mark: ",marks);

let highMarks = marks.filter(mark => mark > 75);
console.log("Marks > 75",highMarks);

// let x = marks.length;
// let sum = 0;
// for(let i=0; i<x; i++){
//     sum = sum + marks[i];
// }
// let avg = sum/x;
// console.log("Average of the array",avg);
let total = marks.reduce((sum,mark)=>sum+mark,0)
let avg = total/marks.length;
console.log("Average marks",avg);

console.log("Full array: ",marks);


