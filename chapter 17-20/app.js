//-------Question no 1--------

var myArray = new Array(3);


for (var i = 0; i < 3; i++) {
  myArray[i] = new Array(4);
}

console.log(myArray);

//-------Question no 2--------

var myArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  // Print the array in given matrix form
  for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i].join(' '));
  }

//-------Question no 3--------

// Print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//-------Question no 4--------

// Take input from the user for table number and length
var tableNumber = +prompt("Enter the table number:");
var tableLength = +prompt("Enter the table length:");

// Print the multiplication table
for (let i = 1; i <= tableLength; i++) {
  console.log(tableNumber + x  + tableNumber * i);
}

//-------Question no 5--------

// Define the fruits array
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print the items of the fruits array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Element at index 0 is " +fruits[0])
console.log("Element at index 1 is " +fruits[1])
console.log("Element at index 2 is " +fruits[2])
console.log("Element at index 3 is " +fruits[3])
console.log("Element at index 4 is " +fruits[4])

//-------Question no 6--------

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// Generate counting series
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + ", ";
}

// Remove the trailing comma and space
counting = counting.slice(0, -2);

// Print the counting series to the console
console.log("Counting: " + counting);
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Generate reverse counting series
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}

// Remove the trailing comma and space
reverseCounting = reverseCounting.slice(0, -2);

// Print the reverse counting series to the console
console.log("Reverse counting: " + reverseCounting);
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// Generate even series
var even = "";
for (var i = 0; i <= 20; i += 2) {
  even += i + ", ";
}

// Remove the trailing comma and space
even = even.slice(0, -2);

// Print the even series to the console
console.log("Even: " + even);
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// Generate odd series
var odd = "";
for (let i = 1; i <= 19; i += 2) {
  odd += i + ", ";
}

// Remove the trailing comma and space
odd = odd.slice(0, -2);

// Print the odd series to the console
console.log("Odd: " + odd);
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Generate series
var series = "";
for (var i = 1; i <= 10; i++) {
  series += 2 * i + "k, ";
}

// Remove the trailing comma and space
series = series.slice(0, -2);

// Print the series to the console
console.log("Series: " + series);
  
//--------Question no 7--------

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

var isFound = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    isFound = true;
    break;
  }
}

if (isFound) {
  console.log(userInput + " is found in the list.");
} else {
  console.log(userInput + " is not found in the list.");
}

//--------Question no 8--------

var A = [24, 53, 78, 91, 12];
var maxNum = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > maxNum) {
    maxNum = A[i];
  }
}

console.log("The largest number in the array is: " + maxNum);

//--------Question no 9--------

var A = [24, 53, 78, 91, 12];
var minNum = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < minNum) {
    minNum = A[i];
  }
}

console.log("The smallest number in the array is: " + minNum);

//--------Question no 10--------

for (var i = 1; i <= 20; i++) {
    console.log(i * 5);
}

