//  Question 1:


// Write a program that displays current date and time in your browser.


// Answer 


// let now = new Date();
// document.write(now);



//   Question 2:



// Write a program that alerts the current month in words. For example December.



// Answer 


// let months = ["January","February","March","April","May","June","July",
            //   "August","September","October","November","December"];

// let now = new Date();
// let monthName = months[now.getMonth()];
// alert(monthName);



//  Question 3:


// Write a program that alerts the first 3 letters of the current day.




// Answer 

// let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// let now = new Date();
// let dayName = days[now.getDay()];
// alert(dayName);




//  Question 4:


// Write a program that displays a message “It’s Fun day” if it's Saturday or Sunday.




// Answer 


// let now = new Date();
// let day = now.getDay();

// if(day === 0 || day === 6){
//     alert("It's Fun day");
// }




//  Question 5:


// Write a program that shows “First fifteen days of the month” if date < 16, else “Last days of the month”.



// Answer 


// let now = new Date();
// let date = now.getDate();

// if(date < 16){
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }




//  Question 6:


// Write a program that determines the minutes since Jan 1, 1970.



// Answer 


// let today = new Date();
// let minutes = today.getTime() / (1000 * 60);
// document.write("Minutes since Jan 1, 1970 = " + minutes);




//  Question 7:



// Write a program that tests whether it's before noon or after & alert accordingly.



// Answer 


// let now = new Date();
// let hours = now.getHours();

// if(hours < 12){
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }




//  Question 8:



// Create a Date object for the last day of the last month of 2020.



// Answer 


// let laterDate = new Date("December 31, 2020");
// document.write(laterDate);




//  Question 9:




// Create a date object of the starting date of this Ramadan & alert days passed since 1st Ramadan (June 18, 2015).


// Answer 

// let ramadanStart = new Date("June 18, 2015");
// let today = new Date();

// let diff = today.getTime() - ramadanStart.getTime();
// let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan 2015");



//  Question 10:


// Write a program that displays the seconds passed since the beginning of 2015.




// Answer 

// let date2015 = new Date("January 1, 2015");
// let now = new Date();

// let diff = now.getTime() - date2015.getTime();
// let seconds = Math.floor(diff / 1000);

// document.write("Seconds since beginning of 2015: " + seconds);




//  Question 11:


// Create a Date object for current date & extract the hours. Reset the date object one hour ahead.




// Answer 


// let now = new Date();
// let currentHour = now.getHours();

// now.setHours(currentHour + 1);

// document.write("Updated Date (1 hour ahead): " + now);






//  Question 12:


// Write a program that creates a date object and show the date reset to 100 years back.




// Answer 



// let now = new Date();
// now.setFullYear(now.getFullYear() - 100);

// alert("100 years back: " + now);




//  Question 13:



// Ask user his age & show his birth year.


// Answer 


// let age = +prompt("Enter your age:");
// let now = new Date();

// let birthYear = now.getFullYear() - age;

// document.write("Your birth year is " + birthYear);




//  Question 14:

// Write a program to generate your K-Electric bill.



// Answer 


// let customerName = "Muhammad Ajmal";
// let month = "November";
// let units = 350;
// let chargesPerUnit = 20;

// let netAmount = units * chargesPerUnit;
// let lateSurcharge = 500;
// let grossAmount = netAmount + lateSurcharge;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + month + "<br>");
// document.write("Number of Units: " + units + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");

// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");


// document.write("Gross Amount Payable (after Due Date): " + grossAmount);









