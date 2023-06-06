var countryName;
var background;
var pList = new Array();
var rowID; 

class Prov {
    //Init a new province
    constructor(name, type, capital, flag, ...cities) {
        this.name = name;
        this.type = type;
        this.capital = capital;
        this.flag = flag;
        this.cities = cities; 
    }
}

//document.ready - will be called once HTML has finished loading
$(function() {
    //call ajax to get json data
    $.ajax({
        type: "GET",
        url: "dataFiles/canada.json",
        dataType: "json",
        success: loadJSON, //we will call this when json has been loaded
        error: function(err) { alert(`Error while fetching data
         ${err.status} \n ${err.statusText}`); }

    })
})

function loadJSON(data) {
    console.log(`data: ${data}`);

    //Set the values from json file
    countryName = data.country.name;
    background = data.country.background;

    console.log(`country name : ${countryName}`);
    console.log(`country background : ${background}`)

    for(let prov of data.country.division) {
        if(prov.type == "province") {
            //we are in the provinces

            var cities = new Array();

            for(let city of prov.city) {
                //push all the cities in each province
                //into an array called cities
                cities.push(city);
            }

            //Make a new province with the province information
            pList.push(new Prov(prov.name, prov.type, 
                prov.capital, prov.pic, cities));
        }
    }

    mainScreen();

}

function mainScreen() {
    //This function will build the HTML using the data we've collected

    //Select HTML elements using JQUERY

    //Using Javascript we can retrieve the country name
    $("#country").html(`${countryName} / Provinces`);

    //Using JS we can retrieve the background
    $("#background").html(background);

    //Clear province list 
    $("#provList").html(""); 

    //Populate province list
    for(x = 0; x < pList.length; x++) {
        //index will be id for each list item
        $("#provList").append(`
            <li li-id='${x}'>
            <a href='otherPages/provPage.html'>
            ${pList[x].name} </a>
            </li>
        `)
    }
}

//On each click we will save data to local storage
$(document).on("click", "#provList >li", function() {
    console.log("Saving data to Local Storage")
    localStorage.setItem("rowID", $(this).closest("li").attr("li-id"))
    localStorage.setItem("countryName", countryName);
    localStorage.setItem("pList", JSON.stringify(pList));
})