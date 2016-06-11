var notesSpeed = 5000;
var notesSpeedInSec = notesSpeed / 1000;

Template.notes.onRendered(function () {
	notesSetValues();

});

Template.notes.events({

	'click .noteSkip': function() {
		notesSetValues();
		notesSpeedInSec = notesSpeed / 1000;
	},

  	'input .speedRange': function(event){
	    $('.noteSpeedIndicateSpan').text(event.currentTarget.value);
    	notesSpeed = event.currentTarget.value * 1000;
	}
});

//initialize
function notesSetValues() {
	var notes = ["C", "D", "E", "F", "G", "A", "B"];
	var sharpFlat = ["#", "b", ""];
	var setString = notes[returnRandom(7)] + " " + sharpFlat[returnRandom(3)]
	$('.noteNote').text(setString);
}

//function to create random number 
function returnRandom(howMany) {
	return Math.floor((Math.random() * howMany));
}

//Keep the timer going
setInterval(function(){

	$('.noteTime').text(Number(notesSpeedInSec).toFixed(1));
	notesSpeedInSec -= 0.01;
	if (notesSpeedInSec < 0) {
		notesSpeedInSec = notesSpeed / 1000;
		notesSetValues();
	}

}, 10);	