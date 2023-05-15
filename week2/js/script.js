// localStorage.js
/* Later we will be using Classes and loading student data from external data file */

//calls build list save to LS
function createListLS() {
  buildListSaveToLS();
}

function buildListSaveToLS() {
  //
  document.getElementById("select").innerHTML = "<option>Select an ID</option>";
  for (let x = 1; x <= 2; x++) {
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
  buildListSaveToLS();
  document.getElementById("outid").value = "";
  document.getElementById("outname").value = "";
  document.getElementById("outamount").value = "";
  alert("Student Data Saved");
}

function makeReport() {
  current = document.getElementById("select").value;
  for (let key in localStorage) {
    if (localStorage.getItem(key) == current) {
      // localStorage.getItem(key) pulls the key's value
      console.log(localStorage.getItem(key));

      // key would be the key name
      console.log(key);

      let lastChar = key.substr(key.length - 1); // Get last character to find key names

      console.log(lastChar);

      document.getElementById("outid").value = localStorage.getItem(
        `sid${lastChar}`
      );
      document.getElementById("outname").value = localStorage.getItem(
        `sname${lastChar}`
      );

      let tuition = parseFloat(localStorage.getItem(`tuition${lastChar}`));
      let fees = parseFloat(localStorage.getItem(`fees${lastChar}`));
      let scholarship = parseFloat(
        localStorage.getItem(`scholarship${lastChar}`)
      );

      document.getElementById("outamount").value = (
        (tuition + fees - scholarship) *
        1.13
      ).toFixed(2);
    }
  }
}

function printData() {
  window.print();
}
