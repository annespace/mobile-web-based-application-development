class Planet {
  constructor(
    planetName,
    planetColor,
    planetRadiusKM,
    distInMillionsKM,
    image
  ) {
    this.name = planetName;
    this.color = planetColor;
    this.radius = planetRadiusKM;
    this.distanceFromSun = distInMillionsKM.fromSun;
    this.distanceFromEarth = distInMillionsKM.fromEarth;
    this.image = image;
  }
}

$(document).ready(function () {
  var planetsArray = [];

  $.ajax({
    url: "dataFiles/planets.json",
    dataType: "json",
    success: function (data) {
      $.each(data.solarSystem.planets, function (index, planetData) {
        var planet = new Planet(
          planetData.planetName,
          planetData.planetColor,
          planetData.planetRadiusKM,
          planetData.distInMillionsKM,
          planetData.image
        );
        planetsArray.push(planet);
      });

      var planetList = $("#planet-list");
      $.each(planetsArray, function (index, planet) {
        var listItem = $("<li>").append(
          $("<a>")
            .attr("href", "planet.html?id=" + index)
            .text(planet.name)
        );
        planetList.append(listItem);
      });

      planetList.on("click", "a", function (event) {
        event.preventDefault();
        var planetIndex = $(this).attr("href").split("=")[1];
        var selectedPlanet = planetsArray[planetIndex];

        // Save selected planet information in local storage
        localStorage.setItem("selectedPlanet", JSON.stringify(selectedPlanet));

        // Redirect to individual page for the selected planet
        window.location.href = "/html/individual.html";
      });
    },
  });
});

$(document).ready(function () {
  // Retrieve planet data from local storage
  var selectedPlanetData = JSON.parse(localStorage.getItem("selectedPlanet"));

  // Display the planet details on the individual page
  $("#planet-name").text(selectedPlanetData.name);
  $("#planet-color").text("Color: " + selectedPlanetData.color);
  $("#planet-image").attr("src", "images/" + selectedPlanetData.image);
  $("#planet-radius").text("Radius: " + selectedPlanetData.radius + " km");
  $("#planet-distance-sun").text(
    "Distance from Sun: " + selectedPlanetData.distanceFromSun + " million km"
  );
  $("#planet-distance-earth").text(
    "Distance from Earth: " +
      selectedPlanetData.distanceFromEarth +
      " million km"
  );
});
