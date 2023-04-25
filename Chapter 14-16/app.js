//Declare an empty array using JS literal notation to store student names in future.

var studentNames = [];

//Declare an empty array using JS object notation to store student names in future.

var studentNames = new Array();

//Declare and initialize a strings array.

var cities = ["Karachi", "Lahore", "Islamabad"];

//Declare and initialize a numbers array.

var ages = [18, 25, 30, 40];

//Declare and initialize a boolean array.

var boolArr = [true, false, true];

//Declare and initialize a mixed array.

var mixedArr = ["John", 25, true];

//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");
for(let i=0; i<qualifications.length; i++){
    document.write((i+1) + ") " + qualifications[i] + "<br>");
}


// program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:

var studentNames = ["Ali", "Ahmed", "Sara"];
var studentScores = [320, 410, 490];

// Calculate and store percentages
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage.toFixed(2));
}

// Display scores and percentages
for (var i = 0; i < studentNames.length; i++) {
  document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentages[i] + "%<br>");
}


//Initialize an array with color names. Display the array elements in your browser.

var colorNames = ["Red", "Green", "Blue"];
document.write("<br>Original array: " + colorNames);

// a. Add color to the beginning of the array
var colorToAdd = prompt("Enter a color to add to the beginning:");
colorNames.unshift(colorToAdd);
document.write("<br>After adding to the beginning: " + colorNames);

// b. Add color to the end of the array
colorToAdd = prompt("Enter a color to add to the end:");
colorNames.push(colorToAdd);
document.write("<br>After adding to the end: " + colorNames);

// c. Add two more colors to the beginning of the array
colorNames.unshift("Yellow", "Orange");
document.write("<br>After adding two colors to the beginning: " + colorNames);

// d. Delete the first color in the array
colorNames.shift();
document.write("<br>After deleting the first color: " + colorNames);

// e. Delete the last color in the array
colorNames.pop();
document.write("<br>After deleting the last color: " + colorNames);

// f. Add a color at user-defined position
var indexToAdd = prompt("Enter an index to add a color:");
colorToAdd = prompt("Enter a color to add at index " + indexToAdd + ":");
colorNames.splice(indexToAdd, 0, colorToAdd);
document.write("<br>After adding color at index " + indexToAdd + ": " + colorNames);

// g. Remove user-defined number of colors from user-defined position
var indexToDelete = prompt("Enter an index to delete colors from:");
var numToDelete = prompt("Enter the number of colors to delete from index " + indexToDelete + ":");
colorNames.splice(indexToDelete, numToDelete);
document.write("<br>After deleting " + numToDelete + " colors from index " + indexToDelete + ": " + colorNames);

//program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// Define an array of student scores
let studentScores = [78, 90, 65, 87, 92];

// Use Array's sort method to sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array in the console
console.log(studentScores);

//----Question 11------

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Initialize an empty array to store selected cities
var selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4);

// Display both arrays
console.log("Cities:", cities);
console.log("Selected Cities:", selectedCities);

//----Question 12------

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString); // Output: "This is my cat"

//-----Question 13------

var fifoArray = [];
fifoArray.push("keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

console.log(fifoArray.shift()); 
console.log(fifoArray.shift());
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 

//-----Question 14------

var values = [];

// Store values in the array
values.push("keyboard");
values.push("Mouse");
values.push("Printer");
values.push("Monitor");

// Access the values in reverse order
for(let i = values.length-1; i>=0; i--){
  console.log(values[i]);
}

//-----Question 15------

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");





