//----------Question no 1--------------
var num1 = +prompt("Enter the first number:");

var num2 = +prompt("Enter the second number:");

var sum = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "." + "<br>");

//----------Question no 2--------------
var num1 = +prompt("Enter the first number:");

var num2 = +prompt("Enter the second number:");

var subtraction = num1 - num2;

document.write("The subtraction between " + num1 + " and " + num2 + " is " + subtraction + "." + "<br>");


// Multiplication

var mulitpication = num1 * num2;

// Display the result in the browser
document.write("The multiplication of " + num1 + " and " + num2 + " is " + mulitpication + "." + "<br>");

// Division

var Division = num1 / num2;

// Display the result in the browser
document.write("The Division of " + num1 + " and " + num2 + " is " + Division + "." + "<br>");

// Modulus

// Prompt the user for the first number

var remainder = num1 % num2;

document.write("The remainder when " + num1 + " is divided by " + num2 + " is " + remainder + "<br>");





//--------Question no 3-----------

//a.Declare a variable
var myVariable;

//b.Display the value of variable after declaration
document.write("Value after variable declaration is: " + myVariable + "<br>");

//c.Initialize the variable with a number
myVariable = 5;

//d.Display the initial value of the variable
document.write("Initial value: " + myVariable + "<br>");

//e.Increment the variable by 1
myVariable++;

//f.Display the updated value of the variable
document.write("Value after increment is: " + myVariable);

//g.To add 7 to the variable
var myVariable = 5;
myVariable += 7;

//h. To show the value of the variable after adding 7.

var myVariable = 5;
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");

//i. To decrement the variable, you can use the -- operator. For example:

var myVariable = 12;
myVariable--;
//j. To show the value of the variable after decrementing.

var myVariable = 12;
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");

//k. To show the remainder after dividing the variable's value by 3.

var myVariable = 12;
var remainder = myVariable % 3;

//l. To output the message "The remainder is: 0" to the browser.

var myVariable = 12;
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");

//--------Question no 4------------

var numOfTickets = 5; // declare and initialize numOfTickets variable
var totalCost = ticketPrice * numOfTickets; // calculate total cost of 5 tickets

document.write("Total cost to buy " + numOfTickets + " to a movie is " + totalCost + " PKR."); 


//--------Question no 5------------

var num = +prompt("Enter a number to display its multiplication table:"); // prompt the user to enter a number
document.write("<h1>Table of " + num + "</h1>"); // output the heading for the multiplication table

for (var i = 1; i <= 10; i++) {
  var result = num * i; // calculate the result of multiplying num by i
  document.write(num + " x " + i + " = " + result + "<br>"); // output the result to the browser console
}


//--------Question no 6------------

// Convert Celsius to Fahrenheit
var celsius = 30; // declare and initialize Celsius variable
var fahrenheit = (celsius * 9/5) + 32; // convert Celsius to Fahrenheit
document.write(celsius + "°C is " + fahrenheit + "°F.<br>"); // output the result to the browser console

// Convert Fahrenheit to Celsius
var fahrenheit2 = 86; // declare and initialize Fahrenheit variable
var celsius2 = (fahrenheit2 - 32) * 5/9; // convert Fahrenheit to Celsius
document.write(fahrenheit2 + "°F is " + celsius2 + "°C."); // output the result to the browser console

//--------Question no 7------------

// Store the prices and quantities of the items, and the shipping charges
var item1Price = 500;
var item2Price = 800;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 100;

// Calculate the total cost of the items and add the shipping charges
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("Price of Item 1 is " + item1Price + "<br>");
document.write("Quantity of Item 1 is " + item1Quantity + "<br>");
document.write("Price of Item 2 is " + item2Price + "<br>");
document.write("Quantity of Item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges is " + shippingCharges + "<br>");
document.write("Total Cost of your order is " + totalCost + "<br>");

//----------Question no 8--------------


var Total_marks = 500;
var obtained_marks = 450;
var percentage = obtained_marks / Total_marks * 100;
document.write("<h1>" + "Marksheet" + "</h1>" );
document.write("Total marks: " +Total_marks)
document.write("Marks obtained: " +obtained_marks)
document.write("Percentage : " + percentage)


//----------Question no 9--------------

document.write("<h1>" + "Currency in PKR" + "</h1>" );
total_pkr = (10 * 104.80) + (25 * 28)
document.write("Total currency in PKR is: " + total_pkr);

//----------Question no 10--------------


//Initializing the variable with a number
number = 7

//Performing the arithmetic operations in a single expression
result = ((number + 5) * 10) / 2

//Printing the result
document.write(result)

//----------Question no 11--------------

//Store the current year in a variable
current_year = 2023

//Store their birth year in a variable
birth_year = 2002

//Calculate their age based on the stored values
age1 = current_year - birth_year
age2 = age1 - 1

//results
document.write("current year:" + current_year)
document.write("birth year:" + birth_year)
document.write("They are either", age1, "or", age2, "years old.")


//----------Question no 12--------------

// Store the radius of the circle in a variable
var radius = 5;

// Calculate the circumference based on the radius
var circumference = 2 * Math.PI * radius;

// Calculate the area based on the radius
var area = Math.PI * radius ** 2;

// Print out the results
console.log("The circumference is : " + round(circumference));
console.log("The area is :" + round(area));

//----------Question no 13--------------

// Store your favorite snack in a variable
var favoriteSnack = "chocolate";

// Store your current age in a variable
var currentAge = 30;

// Store a maximum age in a variable
var maximumAge = 80;

// Store an estimated amount per day in a variable
var amountPerDay = 2;

// Calculate how many snacks you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacks = daysRemaining * amountPerDay;

// Output the result to the screen
console.log("You will need " + totalSnacks +favoriteSnack(s) + " to last you until the ripe old age of " +maximumAge);







