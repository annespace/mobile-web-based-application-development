// Sheridan Diner
var rname, rimg, rslogan;
var bmenu = new Array();
var lmenu = new Array();
var dmenu = new Array();

class Menu {
	constructor (name, description, calories, price){
		this.name=name; this.description=description;
		this.calories=calories;
		this.price = price;
	}
}

alignArray = new Array();
alignArray[0] = "left";
alignArray[1] = "center";
alignArray[2] = "right";

var	initialView = true;

function getJSON() {
	fetch("./data/menu.json")
	.then(res => res.json())
	.then((data) => {

		loadHeader(data);
		loadArrays(data);
		checkInitialView(data);
		// After initial view, menu displayed will depend on button clicks
	});
}

function loadHeader(data) {
	document.getElementById("restaurantName").innerHTML = data.restaurant.name;
	document.getElementById("rSlogan").innerHTML = data.restaurant.slogan;
	document.getElementById("rPic").innerHTML	= `<img src="./images/${data.restaurant.picture}" width="75px" height="30px">`;
}

function loadArrays(data) {
	let menu = data.restaurant.menu[0].food;
	for (let x of menu) { bmenu.push(new Menu(x.name, x.description, x.calories, x.price)); }
	//console.log(bmenu);

	menu = data.restaurant.menu[1].food;
	for (let x of menu) { lmenu.push(new Menu(x.name, x.description, x.calories, x.price)); }
	//console.log(lmenu);

	menu = data.restaurant.menu[2].food;
	for (let x of menu) { dmenu.push(new Menu(x.name, x.description, x.calories, x.price)); }
	//console.log(dmenu);
}

function checkInitialView(initialView) {
	if (initialView) {
		var today = new Date().getHours();
		// .getSeconds(); .getMinutes(); .getDate(); .getDay(); .getMonth(); .getFullYear(); .getTime();
		
		if (parseInt(today) >= 17) {  // dinner - 5:00 +
			food(dmenu, alignArray[2]);	 }
		else if (today >= 11) {  // lunch
			food(lmenu, alignArray[1]);	 }
		else {  // breakfast
			food(bmenu, alignArray[0]);	 }
		initialView = false;
	}
} // end of checkInitial


function breakfast() {
	food(bmenu, alignArray[0]);
}

function lunch() {
	food(lmenu, alignArray[1]);
}

function dinner() {
	food(dmenu, alignArray[2]);
}


function food(menu, align) {
	document.getElementById("menuItemsList").style.textAlign = align;
	document.getElementById("menuItemsList").innerHTML = "";

	for (let x of menu) {
		document.getElementById("menuItemsList").innerHTML +=
		`
			<strong>${x.name}</strong><br>
			${x.description}<br>
			Calories: ${x.calories} / Price: ${x.price}<br>
		`;
	}
} // end of food
