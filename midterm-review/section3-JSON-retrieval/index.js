/*
Q-9: Write jQuery code to make initiate a request to get the JSON data from cars.json
file from jsonData sub-directory within current directory.
If successful, call method name fetchCars. Otherwise, display alert with appropriate message.
*/ $(document).ready(function () {
  $.ajax({
    url: "jsonData/cars.json",
    dataType: "json",
    success: function (data) {
      fetchCars(data);
    },
    error: function (xhr, status, error) {
      alert("Failed to fetch JSON data: " + error);
    },
  });
});

function fetchCars(data) {
  // Process the fetched data here
  console.log(data);
}

/*
Q-10: Write jQuery code for fetchCars method assuming a function parameter receiving json data from
AJAX call. Using the received data, extract the used car objects, and iterate through all the extracted
used car objects to display the object details in the log message on console.
*/
$(document).ready(function () {
  $.ajax({
    url: "jsonData/cars.json",
    dataType: "json",
    success: function (data) {
      fetchCars(data);
    },
    error: function (xhr, status, error) {
      alert("Failed to fetch JSON data: " + error);
    },
  });
});

function fetchCars(data) {
  var usedCars = data.cars.Used; // Extract the "Used" cars array from the received data

  // Iterate over each used car object and display the details in the console log
  $.each(usedCars, function (index, car) {
    console.log(car.make);
    console.log(car.type);
    console.log(car.engine);
    console.log(car.cost);
    console.log(car.tag);
    console.log(car.colors);
  });
}
/*
Q-11: Write jQuery code for displaying the individual table rows in #jsonbody table
for each of the used car object you extracted and iterated over in the previous answer. 
Check the table header for the details you will need to display in a table row.
*/
$(document).ready(function () {
  $.ajax({
    url: "jsonData/cars.json",
    dataType: "json",
    success: function (data) {
      fetchCars(data);
    },
    error: function (xhr, status, error) {
      alert("Failed to fetch JSON data: " + error);
    },
  });
});

function fetchCars(data) {
  var cars = data.cars.Used; // Get the "Used" cars array from the JSON data

  // Iterate over each car and populate the table
  $.each(cars, function (index, car) {
    // Create a new table row
    var row = $("<tr>");

    // Add the car make, type, and cost as table cells
    $("<td>").text(car.make).appendTo(row);
    $("<td>").text(car.type).appendTo(row);
    $("<td>").text(car.cost).appendTo(row);

    // Append the row to the table body
    $("#jsonbody").append(row);
  });
}
