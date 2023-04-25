//---------Question no 1--------------

var char = prompt("Enter a character: ");
var ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log(char + " is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log(char + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log(char + " is a lowercase letter.");
} else {
    console.log("Invalid input!");
}

//---------Question no 2--------------

var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num2 > num1) {
  alert("The larger number is: " + num2);
} else {
  alert("Both integers are equal.");
}

//---------Question no 3--------------

var number = +prompt("Enter a number:");

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//---------Question no 4--------------

var char = prompt("Enter a character:"); // take input from user

// check if the character is a vowel or not
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
   char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
  console.log(char + " is a vowel.");
} else {
  console.log(char + " is not a vowel.");
}


//---------Question no 5--------------

// Step a
var correctPassword = "myPassword123";

// Step b
var userInput = prompt("Enter your password:");

// Step c
if (userInput === "") {
  alert("Please enter your password");
} else if (userInput === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


//---------Question no 6--------------

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//---------Question no 7--------------

var time = +prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):");
var message;

if (time >= 0000 && time < 1200) {
  message = "Good morning!";
} else if (time >= 1200 && time < 1700) {
  message = "Good afternoon!";
} else if (time >= 1700 && time < 2100) {
  message = "Good evening!";
} else if (time >= 2100 && time <= 2359) {
  message = "Good night!";
} else {
  message = "Invalid time!";
}

alert(message);
