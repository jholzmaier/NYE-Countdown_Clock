// Chapter 9 Practice Project

// global commands 
// figure out the current date and time and store it 
let today = new Date();
// generate and store a random number between 1 and 10
let luckyNum = Math.floor(Math.random() * 40 + 1);

// Output that data to the document model
document.getElementById("dateTime").textContent = today;
document.getElementsByTagName("h3")[1].textContent = "Your lucky number for today is: " + luckyNum;

// function used to display hidden text
function displayText() {
	document.getElementById("hidden").innerHTML = "Hey! This wasn't here before!<br/>And now it is!";
	document.getElementsByTagName("p")[0].style.color = "white"; 
}
