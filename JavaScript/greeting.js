var today = new Date;
var hourNow = today.getHours;
var greeting;

// Check time so we can change the greeting

if(hourNow > 18) {
    greeting = "Good Evening, friend!";
} else if(hourNow > 12) {
    greeting = "Good Afternoon, friend!";
} else if(hourNow > 0) {
    greeting = "Good Morning, friend!";
} else {
    greeting = "Hello, friend!";
}

// Write the greeting
document.write(greeting);