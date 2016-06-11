var scaleSpeed = 5000;
var scaleSpeedInSec = scaleSpeed / 1000;

Template.scales.onRendered(function () {
	scaleSetValues();

});

Template.scales.events({

	'click .scaleSkip': function() {
		scaleSetValues();
		scaleSpeedInSec = scaleSpeed / 1000;
	},

  	'input .speedRange': function(event){
	    $('.scaleSpeedIndicateSpan').text(event.currentTarget.value);
    	scaleSpeed = event.currentTarget.value * 1000;
	}
});

//initialize
function scaleSetValues() {
	var scales = ["C", "D", "E", "F", "G", "A", "B"];
	var sharpFlat = ["#", "b", "", ""];
	var minorMajor = ["Major", "Major", "Major", "Major", "Harmonic Minor", "Minor", "Minor", "Minor"];
	var scaleType = ["Arppeggio", "Pentatonic", "", "", "", ""];

	var setString = scales[returnRandom(7)] + " " + sharpFlat[returnRandom(4)] + " " 
					+ minorMajor[returnRandom(8)] + " " + scaleType[returnRandom(6)];
	$('.scaleScale').text(setString);
}

//function to create random number 
function returnRandom(howMany) {
	return Math.floor((Math.random() * howMany));
}

//Keep the timer going
setInterval(function(){

	$('.scaleTime').text(Number(scaleSpeedInSec).toFixed(1));
	scaleSpeedInSec -= 0.01;
	if (scaleSpeedInSec < 0) {
		scaleSpeedInSec = scaleSpeed / 1000;
		scaleSetValues();
	}

}, 10);	