if (Meteor.isClient) {
	// To store the slideout instance.
	var slideout;

	// Setup code for Slideout menu in MasterLayout
	Template.notes.onRendered(function () {
	  	var template = this;
	  	var menu = this.find('#menu');
	  	var panel = this.find('#panel');
	  	var slideout = new Slideout({
	    	'panel': panel,
	    	'menu': menu,
	    	'padding': 256,
	    	'tolerance': 70
	  	});

	  	// Toggle button
	  	var togglebtn = this.find('.togglebtn');
	  	togglebtn.addEventListener('click', function() {
	    	slideout.toggle();
		});
	});

	Template.intervals.onRendered(function () {
	  	var template = this;
	  	var menu = this.find('#menu');
	  	var panel = this.find('#panel');
	  	var slideout = new Slideout({
	    	'panel': panel,
	    	'menu': menu,
	    	'padding': 256,
	    	'tolerance': 70
	  	});

	  	// Toggle button
	  	var togglebtn = this.find('.togglebtn');
	  	togglebtn.addEventListener('click', function() {
	    	slideout.toggle();
		});
	});

	Template.chords.onRendered(function () {
	  	var template = this;
	  	var menu = this.find('#menu');
	  	var panel = this.find('#panel');
	  	var slideout = new Slideout({
	    	'panel': panel,
	    	'menu': menu,
	    	'padding': 256,
	    	'tolerance': 70
	  	});

	  	// Toggle button
	  	var togglebtn = this.find('.togglebtn');
	  	togglebtn.addEventListener('click', function() {
	    	slideout.toggle();
		});
	});

	Template.scales.onRendered(function () {
	  	var template = this;
	  	var menu = this.find('#menu');
	  	var panel = this.find('#panel');
	  	var slideout = new Slideout({
	    	'panel': panel,
	    	'menu': menu,
	    	'padding': 256,
	    	'tolerance': 70
	  	});

	  	// Toggle button
	  	var togglebtn = this.find('.togglebtn');
	  	togglebtn.addEventListener('click', function() {
	    	slideout.toggle();
		});
	});

	Template.modes.onRendered(function () {
	  	var template = this;
	  	var menu = this.find('#menu');
	  	var panel = this.find('#panel');
	  	var slideout = new Slideout({
	    	'panel': panel,
	    	'menu': menu,
	    	'padding': 256,
	    	'tolerance': 70
	  	});

	  	// Toggle button
	  	var togglebtn = this.find('.togglebtn');
	  	togglebtn.addEventListener('click', function() {
	    	slideout.toggle();
		});
	});

	// Auto-close the menu on route stop (when navigating to a new route)
	Router.onStop(function () {
	  if (slideout) {
	    slideout.close();
	  }
	});

}