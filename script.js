"use strict";

////TASK1 - Change color of h1

////anonymus function

//let h1 = document.getElementById("header");

// h1.addEventListener("click", function(){
//     this.style.color = "red";
// });

////normal function

// let h1 = document.getElementById("header");

//     function changeColorOfH1(){
//         h1.style.color = "blue";
//     };

//     h1.addEventListener("click", changeColorOfH1);


////TASK2 - Change/Toggle color of background 

////Change color using normal function
// let myButton = document.getElementById("myBtn");

// let isBackgroundApplied = false;

// function toggleColors(){
//     if(isBackgroundApplied === false){
//     document.querySelector("body").style.background = "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)"; 
//     isBackgroundApplied = true; 
//     }else{
//     document.querySelector("body").style.background = "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)";
//     isBackgroundApplied = false; 
//     }
// }

// myButton.addEventListener("click", toggleColors);


////Togle color using anonymus function
// let myButton = document.getElementById("myBtn");
// let isBackgroundApplied = 0;

// myButton.addEventListener("click", function(){

//     if(isBackgroundApplied == 0){
//         document.querySelector("body").classList.toggle("gradient1");
//         isBackgroundApplied = 1;
//     }else{
//         document.querySelector("body").classList.toggle("gradient2");
//         isBackgroundApplied = 0;
//     }
// });


//// Change names of p element using 2 regular function
// let replasePhrase1 = document.getElementById("myId1");
// let replasePhrase2 = document.getElementById("myId2");

// function replaseMyPhrase1(){
//     replasePhrase2.style.display = "block";
//     replasePhrase1.style.display = "none";
// }

// function replaseMyPhrase2(){
//     replasePhrase2.style.display = "none";
//     replasePhrase1.style.display = "block";
// }

// replasePhrase1.addEventListener("click", replaseMyPhrase1);
// replasePhrase2.addEventListener("click", replaseMyPhrase2);

// Change names of p element using regular function + isChecked
// let replasePhrase1 = document.getElementById("myId1");
// let replasePhrase2 = document.getElementById("myId2");
// isClicked = false;  // should be global variable

// function replaseMyPhrase(){

//     if(isClicked === false){
//         replasePhrase2.style.display = "block";
//         replasePhrase1.style.display = "none";
//         isClicked = true;
//     }else{
//         replasePhrase2.style.display = "none";
//         replasePhrase1.style.display = "block";
//         isClicked = false;
//     };
// }

// replasePhrase1.addEventListener("click", replaseMyPhrase);
// replasePhrase2.addEventListener("click", replaseMyPhrase);


//Change names of p element using regular function without isChecked
// let replasePhrase1 = document.getElementById("myId1");
// let replasePhrase2 = document.getElementById("myId2");

// function replaseMyPhrase(){

//     if(replasePhrase1.style.display === "none"){
//         replasePhrase1.style.display = "block";  
//         replasePhrase2.style.display = "none";
//     }else{
//         replasePhrase2.style.display = "block";
//         replasePhrase1.style.display = "none";
//     };
// }

// replasePhrase1.addEventListener("click", replaseMyPhrase);
// replasePhrase2.addEventListener("click", replaseMyPhrase);


//________________________________Reaction Task________________________________

// //get the shape
// let shape = document.getElementById("shape");

// //get the start date from 1970 in milisec
// let startTime = new Date().getTime();

// //Getting random color of the figure 
// let getRandomColor = ()=>{
//     //colors may exist like this #dgd345 - combination of up to 6 letters&numbers, so let's get the "array" of all possgible cases and split them with ''
//     let lettersAndNumbers = "0123456789ABCDEF".split('');
//     //here we will get the color strarting with #
//     let color = "#";
//     //creating condition that the color should't be bigger than 6 numbers&letters  
//     for(let i = 0; i < 6; i++){
//         //creating condition that color "#" will randomly combine with lettersAndNumbers "0123456789ABCDEF" 
//         //(Math.random function is any number from 0 till 1)
//         color += lettersAndNumbers[Math.floor(Math.random() * 16)]; //floor function will get the numbers without decimals and *16 we will get all 16 color in the hexidemical system  
//     }
//     return color;
// }

// //make the figure appear after the click
// let makeShapeVisible = ()=>{
//     //get the random number from the top of the screen
//     let distanseFromTop = Math.random()*250;
//     //get the figure in the random place from top on the screen
//     shape.style.top = distanseFromTop + "px";

//     //get the random number from the left of the screen
//     let distanseFromLeft = Math.random()*1000;
//     //get the figure in the random place from left on the screen
//     shape.style.left = distanseFromLeft + "px";

//     //Change the width of the figure ramdomly
//     let widthOfTheFigure = Math.random()*700 + 50
//     //change the width
//     shape.style.width = widthOfTheFigure + "px";

//     //Change the height of the figure ramdomly
//     let heightOfTheFigure = Math.random()*200 + 50;
//     //change the height
//     shape.style.height = heightOfTheFigure + "px";

//     shape.style.display = "block"; //this line makes the figure visible

//     //set the timer to 0 after the figure's disappeared
//     startTime = new Date().getTime();

//     //in the one-third of the cases get circles/ovals & in the other one-third of the cases get square/rectangle & in the other one-third of the cases get triangle
//     if(Math.random() < 0.3){
//         shape.style.borderRadius = "50%";
//         shape.style.backgroundColor = getRandomColor(); // random color is here
//         shape.style.borderBottom = "0";
//     }else if(Math.random() >= 0.3 && Math.random() <= 0.7){
//         shape.style.borderRadius = "0%";
//         shape.style.backgroundColor = getRandomColor(); // random color is here
//         shape.style.borderBottom = "0";
//     }else if(Math.random() > 0.7){
//         shape.style.borderRadius = "0%";
//         shape.style.left = "0";
//         shape.style.width = "0";
//         shape.style.borderLeft = "50px solid transparent";
//         shape.style.borderRight = "50px solid transparent";
//         shape.style.borderBottom = "100px solid" + getRandomColor(); // random color is here
//         shape.style.backgroundColor = "transparent";
//     }
// }

// //get the shape after the page's loaded (the figure is not visible from the beginning) - call the functon to make it visible (up to 3 sec of delay)
// setTimeout(makeShapeVisible, Math.random() * 3000);

// //Manipulations with the figure
// shape.onclick = ()=>{

//     //get the finish time 
//     let finishTime = new Date().getTime();

//     //get the figure disappear onclick
//     shape.style.display = "none";

//     //calculate the time between clicks
//     let reactionTime = (finishTime - startTime)/1000; //get the reaction time in the seconds 
//     document.getElementById("reactionTime").innerHTML = reactionTime + " seconds.";
//     setTimeout(makeShapeVisible, Math.random() * 3000);
// }
// _________________________________________________________________________________________________


let numberOfFilms;

function start() {
	numberOfFilms = prompt('How many movies have you watched?', '');
	
	while(numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('How many movies have you watched?', '');
	}
}

start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
    const theNameOfMovie = prompt("What was the name of the last movie you've watched", ''),
        	theRating = prompt('How would you rate it?', '');

		if (numberOfFilms != null && theNameOfMovie != null && theRating != null &&
        theNameOfMovie != '' && theRating != '' && numberOfFilms != '' && theNameOfMovie.length < 50) {
        personalMovieDB.movies[theNameOfMovie] = theRating;
        console.log('done');
    } else {
        console.log('error');
				location.reload();
				//i--;
    }
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
    console.log("Seems like you don't watch too much movies?");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You are classy spectator");
	} else if (personalMovieDB.count >= 30) {
		console.log("You love movies, don't you?");
	} else {
		console.log("Smth wrong");
	}
}

detectPersonalLevel();



function showMyDB(hidden) {
	if(!hidden){
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`The number of your favorite genre is ${i} `, "");
	}
}

writeYourGenres();