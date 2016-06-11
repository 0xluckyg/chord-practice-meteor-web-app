var chordsSpeed = 5000;
var chordsSpeedInSec = chordsSpeed / 1000;

Template.chords.onRendered(function () {
	chordsSetValues();

});

Template.chords.events({

	'click .chordSkip': function() {
		chordsSetValues();
		chordsSpeedInSec = chordsSpeed / 1000;
	},

  	'input .speedRange': function(event){
	    $('.speedIndicateSpan').text(event.currentTarget.value);
    	chordsSpeed = event.currentTarget.value * 1000;
	}
});

//initialize
function chordsSetValues() {
	var chords = ["C", "D", "E", "F", "G", "A", "B"];
	var sharpFlat = ["#", "b", ""];
	var setString = chords[returnRandom(7)] + " " + sharpFlat[returnRandom(3)]
	$('.chordsChord').text(setString);
}

//function to create random number 
function returnRandom(howMany) {
	return Math.floor((Math.random() * howMany));
}


//Keep the timer going
setInterval(function(){

	$('.chordTime').text(Number(chordsSpeedInSec).toFixed(1));
	chordsSpeedInSec -= 0.01;
	if (chordsSpeedInSec < 0) {
		chordsSpeedInSec = chordsSpeed / 1000;
		chordsSetValues();
	}

}, 10);	