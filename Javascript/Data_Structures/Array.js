let marks = [75,80,90,65,88];

//display the array
console.log("Orginal Marks:",marks);

// Add new mark at end
marks.push(95);
console.log("After push",marks);

// Remove last mark
marks.pop();
console.log("After pop",marks);

// Add mark at beginning
marks.unshift();
console.log("After unshift",marks)

//remove first mark
marks.shift();
console.log("After shift",marks)

// Length of array
console.log("Total marks Count:",marks.length);

// Filter marks greater than 80
let highMarks = marks.filter(mark => mark > 80);
console.log("Marks > 80: ",highMarks);

// Total marks using reduce
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log("Total Marks: ",total);

// Sort marks
marks.sort((a,b)=>a-b);
console.log("Sorted Marks: ",marks);

// Reverse marks
marks.reverse();
console.log("Revesed Marks : ",marks);

// Check if mark 90 exists
console.log("Has 90:",marks.includes(90));

// Index of mark 80
console.log("Index of 80: ",marks.indexOf(80));

// Slice marks
console.log("Slice (1 to 3): ",marks.slice(1,3));

// Splice: Remove 1 item at index 2
marks.splice(2,1);
console.log("After splice : ",marks);

// Join into string
console.log("Joined: ",marks.join(", "));

// Flatten nested array
let nested = [1,[2,3],[4,[5]]];
console.log("Flattened: ",nested.flat(2));