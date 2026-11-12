var greetingElement = document.getElementById("hero-greeting");

var currentTime = new Date().getHours();
var greeting = "Hello";

if (currentTime < 3)
    greeting = "Good evening";
else if (currentTime < 12)
    greeting = "Good morning";
else if (currentTime < 18)
    greeting = "Good afternoon";
else
    greeting = "Good evening";

greetingElement.textContent = greeting;