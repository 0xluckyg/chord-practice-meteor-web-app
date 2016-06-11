var intervalsSpeed = 5000;
var intervalsSpeedInSec = intervalsSpeed / 1000;

Template.intervals.onRendered(function () {
	intervalsSetValues();
 
});

Template.intervals.events({

	'click .intervalSkip': function() {
		intervalsSetValues();
		intervalsSpeedInSec = intervalsSpeed / 1000;
	},

  	'input .speedRange': function(event){
	    $('.intervalSpeedIndicateSpan').text(event.currentTarget.value);
    	intervalsSpeed = event.currentTarget.value * 1000;
	}
});

//initialize
function intervalsSetValues() {
	var upDown = ["Up", "Down"];
	var minorMajor = ["Minor", "Major"];
	var interval = ["2nd", "2nd", 
					"3rd", "3rd", 
					"4th", "4th", 
					"5th", "5th", "5th", 
					"6th", "6th", 
					"7th", "7th", 
					"Halfstep", "Wholestep", "Tritone"];


	var intervalString = interval[returnRandom(15)];
	if (intervalString == "Halfstep" || intervalString == "Wholestep" || intervalString == "Tritone") {
		var setString = upDown[returnRandom(2)] + " " + intervalString;
	} else {
		var setString = upDown[returnRandom(2)] + " " + minorMajor[returnRandom(2)] + " " + intervalString;
	}

	$('.intervalsInterval').text(setString);
}

//function to create random number 
function returnRandom(howMany) {
	return Math.floor((Math.random() * howMany));
}

//Keep the timer going
setInterval(function(){

	$('.intervalTime').text(Number(intervalsSpeedInSec).toFixed(1));
	intervalsSpeedInSec -= 0.01;
	if (intervalsSpeedInSec < 0) {
		intervalsSpeedInSec = intervalsSpeed / 1000;
		intervalsSetValues();
	}

}, 10);	
