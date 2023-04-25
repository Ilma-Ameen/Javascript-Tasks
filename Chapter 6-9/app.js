
var a = 10;
document.write("Result:")

document.write("the value of a is : " + a);

document.write("<br>--------------------------");


++a;

document.write("<br><br>the value of ++a is : " + a);
document.write("<br>Now the value of a is : " + a);

document.write("<br><br>the value of a++ is : " + a);
++a;
document.write("<br>Now a value of a is " + a);
--a;
document.write("<br><br>the value of --a is: " + a);
document.write("<br>Now a value of a is " + a);

document.write("<br><br>the value of a-- is " + a);
--a;
document.write("<br>Now a value of a is " + a);


//---------Question no 2-----------

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

/*Step 1:
--a; => a is decremented by 1, and its new value becomes 1. The value of a is now 1.


Step 2:
--a - --b; => a is decremented by 1 again, and its new value becomes 0. b is also decremented by 1, and its new value becomes 0. The expression now becomes 0 - 0, which evaluates to 0.


Step 3:
--a - --b + ++b; => a is decremented by 1 again, and its new value becomes -1. b is incremented by 1, and its new value becomes 1. The expression now becomes -1 - 0 + 1, which evaluates to -0 (zero with a negative sign).


Step 4:
--a - --b + ++b + b--; => b is now decremented by 1, and its value becomes 0. The expression now becomes -1 - 0 + 1 + 1, which evaluates to 1.*/

//----------Question no 3----------


var username = prompt("Enter your Name:");
alert("Hello, " + username + "! Welcome to our website.");

//----------Question no 4----------

var num = prompt("Enter a number to display its multiplication table:");
if (num === null || num === "") {
  num = 5; // Default value
}
for (let i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num*i + "<br>");
}

//----------Question no 5----------

// Take input from the user for three subjects' names
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");

// Total marks for each subject
var totalMarks = 100;

// Take input from the user for obtained marks in each subject
var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ":");

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table format
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total Marks:</th><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><th colspan='2'>Percentage:</th><td>" + percentage.toFixed(2) + "%</td></tr></table>");



