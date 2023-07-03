// use a Class statement with a Constructor to save all the planet information
// from the JSON file into an array.
class Planet {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

const planetArray = [];

// Fetch the JSON file
fetch("dataFiles/planets.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const planet = new Planet(item.name, item.image, item.description);
      planetArray.push(planet);
    });

    // Call a function to render the planet list
    renderPlanetList();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function renderPlanetList() {
  const planetListContainer = document.getElementById("planet-list");

  planetArray.forEach((planet, index) => {
    // Create an anchor tag with the planet image and name
    const planetLink = document.createElement("a");
    planetLink.href = "#"; // Replace with the URL of the individual planet page
    planetLink.id = `planet-${index}`; // Set a unique ID based on the index
    planetLink.addEventListener("click", handleClick); // Add a click event listener

    const planetImage = document.createElement("img");
    planetImage.src = `images/${planet.image}`;
    planetImage.alt = planet.name;

    const planetName = document.createElement("span");
    planetName.textContent = planet.name;

    planetLink.appendChild(planetImage);
    planetLink.appendChild(planetName);

    // Append the anchor tag to the planet list container
    planetListContainer.appendChild(planetLink);
  });
}

function handleClick(event) {
  event.preventDefault();

  const planetId = event.target.id;
  const planetIndex = parseInt(planetId.split("-")[1]);
  const selectedPlanet = planetArray[planetIndex];

  // Save the selected planet information to local storage
  localStorage.setItem("selectedPlanet", JSON.stringify(selectedPlanet));

  // Redirect to the individual planet page
  window.location.href = "individual.html"; // Replace with the URL of the individual planet page
}
