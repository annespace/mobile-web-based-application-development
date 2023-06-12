/*
Q-1: Write a jQuery code to include “Sheridan” as the content in the element 
having id “schoolName".
*/
$(document).ready(function () {
  $("#schoolName").text("Sheridan");
});

/*
Q-2: Write a jQuery code to include your main campus as the content in the element
having class “myCampus".
*/
$(document).ready(function () {
  $(".myCampus").text("Trafalgar");
});

/*
Q-3: Write a jQuery code to toggle the appearance of elements having class "rhyme"
on a click of a button having ID toggleRhyme
*/
$(document).ready(function () {
  $("#toggleRhyme").click(function () {
    $(".rhyme").toggle();
  });
});

/*
Q-4: Write a jQuery code to hide the elements having class "rhyme" containing "Star" 
on a click of a button having ID hideStar
*/
$(document).ready(function () {
  $("#hideStar").click(function () {
    $('.rhyme:contains("Star")').hide();
  });
});

/*
Q-5: Write a jQuery code to get the content of #schoolName element, store in a variable. 
Display the variable in the console log using the back ticks.
*/
$(document).ready(function () {
  var schoolNameContent = $("#schoolName").text();
  console.log(`school name is: ${schoolNameContent}`);
});
