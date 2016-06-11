var modesSpeed = 5000;
var modesSpeedInSec = modesSpeed / 1000;

Template.modes.onRendered(function () {
	modesSetValues();

});

Template.modes.events({

	'click .modeSkip': function() {
		modesSetValues();
		modesSpeedInSec = modesSpeed / 1000;
	},

  	'input .speedRange': function(event){
	    $('.modeSpeedIndicateSpan').text(event.currentTarget.value);
    	modesSpeed = event.currentTarget.value * 1000;
	}
});

//initialize
function modesSetValues() {
	var notes = ["C", "D", "E", "F", "G", "A", "B"];
	var sharpFlat = ["#", "b", ""];
	var modes = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];

	var setString = notes[returnRandom(7)] + " " + sharpFlat[returnRandom(3)] + " " + modes[returnRandom(7)]
	$('.modesMode').text(setString);
}

//function to create random number 
function returnRandom(howMany) {
	return Math.floor((Math.random() * howMany));
}

//Keep the timer going
setInterval(function(){

	$('.modeTime').text(Number(modesSpeedInSec).toFixed(1));
	modesSpeedInSec -= 0.01;
	if (modesSpeedInSec < 0) {
		modesSpeedInSec = modesSpeed / 1000;
		modesSetValues();
	}

}, 10);	