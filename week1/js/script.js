function gpaCalc() {
  let cGPA = parseFloat(document.getElementById("cumulatative").value);
  let cHours = parseFloat(document.getElementById("hours").value);
  let nHours = parseFloat(document.getElementById("newHours").value);
  let nGrade = parseFloat(document.getElementById("grade").value);

  let cWeighted = cGPA * cHours;
  let nWeighted = nGrade * nHours;

  let calcGrade = (cWeighted + nWeighted) / (cHours + nHours);

  document.getElementById("current").innerHTML = `Current GPA is ${cGPA.toFixed(
    1
  )} based on ${cHours}`;
  document.getElementById(
    "new"
  ).innerHTML = `New GPA based on completion of course: ${}`;

  document.getElementById("new").style.color = "red";
  document.getElementById("new").style.weight = "bold";
  document.getElementById("new").style.textAlign = "center";
}
