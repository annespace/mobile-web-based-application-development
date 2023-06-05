// JSON Intro - Variable and Class setups
var sArray = new Array();
var fArray = new Array();
var newRec;

class Student {
	constructor (name, number, program, coop, list){
		this.name=name; this.number=number;
		this.program=program;
		this.coop = coop; this.list=list;
	}
} // end of class Student

class Faculty {
	constructor (name, number, school, fullTime, list){
		this.name=name; this.number=number;
		this.school=school;
		this.fullTime = fullTime; this.list=list;
	}
} // end of class Faculty

//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Initial call from <body onload> 
// Show XMLHttpRequest first then comment out and show Fetch()

function updateSite() {
	//console.log("in function");

	// Get Data from JSON 
	// USING XMLHttpRequest
/* 	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", "dataFiles/schoolData.json", true);
	xhttp.send();

	xhttp.onload = function() {
		data = this.responseText;
		dataJSON = JSON.parse(data);
		console.log(dataJSON);
		
		loadArrays(dataJSON);

		loadView(sArray, true);
	}  // end of XMLHttpRequest(); */

	// USING Fetch()
	fetch("./dataFiles/schoolData.json")
	.then(res => res.json())
	.then((dataJSON) => {
		console.log(dataJSON);

		loadArrays(dataJSON);

		loadView(sArray, true);
	});

} // end of updateSite()
//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Button events
function students() {
	loadView(sArray, true); 
}

function faculty() {
	loadView(fArray, false);
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Loads separate arrays using JSON data for separate button views
function loadArrays(dataJSON) {
	// load student data
	for (let stud of dataJSON.students.studentRec) {
		newRec = new Student(
			stud.name, stud["student-number"],
			stud.program, stud.coop, stud.email
			// could use stud["name"] format for all
		);
		sArray.push(newRec);
	}
	console.log(sArray);

	// load faculty data
	let start = dataJSON.faculty.facultyRecs;
	for (let fac of start) {
		newRec = new Faculty(

			fac.name, fac["faculty-number"], fac.school,
			fac["full-time"], fac.email
		);
		fArray.push(newRec);
	}
	console.log(fArray);
} // end of loadArrays()
//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Function to load initial view and then subsequent views based on button clicks
// Includes functions: headInfo() and outputEmail()
// arrList will be passed student array or faculty array with boolean to distinguish for headers

function loadView(arrList, student) {
	// header column
	headInfo(student ? "Student Data" : "Faculty Info", student);

	// populate tbody
	let sdata = document.getElementById("sdata");
	sdata.innerHTML = "";

	for (let x of arrList) {
		sdata.innerHTML += 
		`
		<tr>
			<td>${x.name}</td>
			<td>${x.number}</td>
			<td>${student ? x.program : x.school}</td>
			<td>${student ? (x.coop ? 'YES' : 'NO') : (x.fullTime ? 'YES': 'NO')}</td>
			<td>${outputEmail(x.list)}</td>
		</tr>
		`;
	}
}  // end of loadView()
//---------------------------------------------------------------------
//---------------------------------------------------------------------

function headInfo(title, student) {
	// Remember: .querySelector() returns first instance only if not further specifications

	document.querySelector('h4').innerHTML = title;
	if (student) {
		document.querySelector('.labels').innerHTML = 
			`<th>NAME</th><th>ID</th><th>PROGRAM</th><th>COOP?</th><th>EMAIL</th>`
	}
	else {
		document.querySelector('.labels').innerHTML =
			`<th>NAME</th><th>ID</th><th>SCHOOL</th><th>FULL TIME?</th><th>EMAIL</th>`
	}
}

function outputEmail(email) {
	let emailList = "";
	for (let em of email) {
		emailList += `${em}<br>`;
	}
	return emailList;
} 


