var countryName;
var cList = new Array();
var pList = new Array();
var rowID;

$(function() {
   //get local storage values
   countryName = localStorage.getItem("countryName");
   rowID = localStorage.getItem("rowID");
   pList = JSON.parse(localStorage.getItem("pList"))
   
   //fill in the HTML
   $("#country").html(countryName);
   $("#pname").html(pList[rowID].name);
   $("#capital").html(pList[rowID].capital);
   $("#flag").html(`<img src='../images/${pList[rowID].flag}'>`);
   $("#cities").html("Major Cities: <br>");

   for (x = 0; x < pList[rowID].cities[0].length; x++) {
    //For all the cities inside the province
    //Add the name of the city to the list 
    //Line break between each city
    $("#cities").append(`${pList[rowID].cities[0][x]} <br>`);
   }
});