/*
Q-6: Write a jQuery code to enter your name and student number in the HTML area where indicated.
*/
$(document).ready(function () {
  $("h1").text("Name: Anne Cho");
  $("h2").text("Student Number: 991655631");
});

/*
Q-7: Write a jQuery/JavaScript code to save the inputs given by user for computer make and 
computer cost to local storage on the click of a #submitData button.
*/
$(document).ready(function () {
  $("#submitData").click(function () {
    // Get the values from the input fields
    var computerMake = $("#cname").val();
    var computerCost = $("#ccost").val();

    // Save the values to local storage
    localStorage.setItem("computerMake", computerMake);
    localStorage.setItem("computerCost", computerCost);
  });
});

/*
Q-8: Write a jQuery/JavaScript code to retrieve the computer make and computer cost
from local storage on the click of a #getData button
and display on #makeOutput and #cost elements on HTML respectively.
*/
$(document).ready(function () {
  $("#getData").click(function () {
    // Retrieve the values from local storage
    var computerMake = localStorage.getItem("computerMake");
    var computerCost = localStorage.getItem("computerCost");

    // Display the values on the HTML elements
    $("#makeOutput").text(computerMake);
    $("#cost").val(computerCost);
  });
});
