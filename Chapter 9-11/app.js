//-------Question no 1---------
var cityName = prompt("Enter city name: ");

if (cityName.toLowerCase() === "karachi") {
  console.log("Welcome to the city of lights");
}

//-------Question no 2---------

var gender = +prompt("Enter your gender: ");

if (gender === "male") {
  console.log("Good Morning Sir");
} else if (gender === "female") {
  console.log("Good Morning Ma'am");
} else {
  console.log("Invalid input");
}

//-------Question no 3---------

let color = prompt("Enter the color of road traffic signal");

if(color === "Red" || color === "red"){
    document.write("<table><tr><td style='color:red'>Signal Color</td><td>Message</td></tr><tr><td style='color:red'>" + color + "</td><td>Must Stop</td></tr></table>");
}
else if(color === "Yellow" || color === "yellow"){
    document.write("<table><tr><td style='color:yellow'>Signal Color</td><td>Message</td></tr><tr><td style='color:yellow'>" + color + "</td><td>Ready to move</td></tr></table>");
}
else if(color === "Green" || color === "green"){
    document.write("<table><tr><td style='color:green'>Signal Color</td><td>Message</td></tr><tr><td style='color:green'>" + color + "</td><td>Move now</td></tr></table>");
}
else{
    document.write("<table><tr><td style='color:gray'>Signal Color</td><td>Message</td></tr><tr><td style='color:gray'>" + color + "</td><td>Wrong input</td></tr></table>");
}
//-------Question no 4---------

var subject1 = +prompt("Enter marks obtained in subject 1");
var subject2 = +prompt("Enter marks obtained in subject 2");
var subject3 = +prompt("Enter marks obtained in subject 3");
var totalMarks = +prompt("Enter total marks");
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = obtainedMarks / totalMarks * 100;
var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one "<br>""
  remarks ="Excellent";
} else if (percentage >= 70) {
  grade = "A "<br>""
  remarks ="Good";
} else if (percentage >= 60) {
  grade = "B "<br>"";
  remarks="You need to improve";
} else if (percentage < 60) {
  grade = "Fail "<br>"";
}
document.write("<h1>" + "Marks Sheet" + "</h1>")
document.write("Total marks: " + totalMarks + "<br>");
document.write("Obtained marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);

//-------Question no 5---------

/*a. Alert message would be displayed because the condition (++a === 5) is true.
Output: "given condition for variable a is true"

b. Alert message would not be displayed because the condition (b++ === 83) is false.
Output: No output

c. Two alert messages would be displayed because the conditions (c++ === 13) and (c === 13) are true.
Output: "condition 1 is true", "condition 2 is true"

Also, the fourth condition (c === 14) is true so the corresponding alert message would also be displayed.
Output: "condition 4 is true"

d. Alert message would be displayed because the condition (totalCost === laborCost + materialCost) is true.
Output: "The cost equals"

e. Alert message "True" would be displayed because the condition (true) is true and the condition (false) is false.
Output: "True"

f. Alert message would be displayed because "car" comes before "cat" alphabetically.
Output: "car is smaller than cat" */

//-------Question no 6---------

var fuel = prompt("Enter the remaining fuel in your car (in litres):");

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

//-------Question no 7---------

// Generate random number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the number
var userGuess = +prompt("Guess the secret number between 1 and 10:");

// Check if the user's guess is correct or close enough
if (userGuess == secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess == secretNumber + 1 || userGuess == secretNumber - 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, wrong guess. The secret number was " + secretNumber + ".");
}

//-------Question no 8---------
var number = +prompt("Enter a number:");
if (number % 3 === 0) 
{
  console.log(number + "is divisible by 3.");
} 
else
{
  console.log(number + "is not divisible by 3.");
}
//-------Question no 9---------

// take input from user
var num = +prompt("Enter a number:");

// check if the number is even or odd
if (num % 2 === 0) {
  // if the number is even
  alert(num + " is an even number.");
} else {
  // if the number is odd
  alert(num + " is an odd number.");
}

//-------Question no 10---------

var temperature = +prompt("Enter temperature:");

if (temperature > 40) 

{
  alert("It is too hot outside.");
} 
else if (temperature > 30) 
{
  alert("The Weather today is Normal.");
}
else if (temperature > 20) 
{
  alert("Today’s Weather is cool.");
}
else if (temperature > 10)
{
  alert("OMG! Today’s weather is so Cool.");
} 
else {
  alert("The temperature is too low.");
}

//-------Question no 11---------

// Taking user input
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = +prompt("Enter the operation (+, -, *, /, %):");

// Calculating based on the operation entered
if (operation === "+") 
{
  alert(num1 + num2 + " = " + num1 + num2);
} 
else if (operation === "-")
{
  alert(num1 - num2 + " = " + num1 - num2);
} 
else if (operation === "*") 
{
  alert(num1 * num2 + " = " + num1 * num2);
} 
else if (operation === "/") 
{
  alert(num1 / num2 + " = " + num1 / num2);
}
else if (operation === "%") 
{
  alert(num1 % num2 + " = " + num1 % num2);
} 
else {
  alert("Invalid operation!");
}

