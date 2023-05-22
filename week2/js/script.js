// localStorage.js
/* Later we will be using Classes and loading student data from external data file */

function createListLS() {
  buildListSaveToLS();
}

function buildListSaveToLS() {
  //Save to local storage
  document.getElementById("select").innerHTML = "<option>Select an ID</option>";
  //For loop that will loop through the data for each student
  //And save to storage
  for (var x = 1; x <= 2; x++) {
    //Template literal
    //Saving the name here
    //(key, value) -> (sname1, sname1.value)
    localStorage.setItem(
      `sname${x}`,
      document.getElementById(`sname${x}`).value
    );
    localStorage.setItem(`sid${x}`, document.getElementById(`sid${x}`).value);
    localStorage.setItem(
      `tuition${x}`,
      document.getElementById(`tuition${x}`).value
    );
    localStorage.setItem(`fees${x}`, document.getElementById(`fees${x}`).value);
    localStorage.setItem(
      `scholarship${x}`,
      document.getElementById(`scholarship${x}`).value
    );

    document.getElementById("select").innerHTML += `<option>${
      document.getElementById(`sid${x}`).value
    }</option>`;
  }
}

function saveData() {
  /*Clear the report area after saving 
  and then show an alert that is has 
  been saved successfully */

  //save new data
  buildListSaveToLS();

  //Clear the report area after new data was saved
  document.getElementById("outid").value = "";
  document.getElementById("outname").value = "";
  document.getElementById("outamount").value = "";

  //Make an alert once the data has been saved
  alert("Student Data Saved");
}

function makeReport() {
  //Make the report area
  //The current student selected
  current = document.getElementById("select").value;

  for (var key in localStorage) {
    //Loop through all the key values in localStorage

    if (localStorage.getItem(key) == current) {
      //If studentID (current) is equal to the key (studentID) in localStorage
      // //print out this studentID

      //(studentID, 99922255331)
      console.log(localStorage.getItem(key)); //return the value

      //key would be the studentID
      console.log(key); //studentID

      //The last character in the studentID key
      let lastChar = key.substring(key.length - 1); //the last character which will be 1 or 2

      console.log(lastChar); //1 OR 2

      //Put the values into the report based on the Student ID
      //Retrieve value from local storage and put it in the report
      document.getElementById("outid").value = localStorage.getItem(
        `sid${lastChar}`
      ); //sid1 or sid2

      document.getElementById("outname").value = localStorage.getItem(
        `sname${lastChar}`
      ); //sname1 or sname2

      //Calculate the outamount
      let tuition = parseFloat(localStorage.getItem(`tuition${lastChar}`));
      let fees = parseFloat(localStorage.getItem(`fees${lastChar}`));
      let scholarship = parseFloat(
        localStorage.getItem(`scholarship${lastChar}`)
      );

      document.getElementById("outamount").value =
        (tuition + fees - scholarship) * 1.13;
      //Tuition + fees - scholarship and add tax
    }
  }
}

function printData() {
  //Print out data
  window.print();
}
