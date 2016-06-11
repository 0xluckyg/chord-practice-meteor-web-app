Meteor.startup(function () {
	
	Router.configure({
		notFoundTemplate: 'notFound',
		loadingTemplate: 'loader'
	});

	Router.map(function() {

		this.route('splash', {
			path: '/',
			template: 'notes',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Notes practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Notes practice';
			},
			data: function() {

			}
		});

		this.route('notes', {
			path: '/notes',
			template: 'notes',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Notes practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Notes practice';
			},
			data: function() {

			}
		});

		this.route('intervals', {
			path: '/intervals',
			template: 'intervals',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Intervals practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Intervals practice';
			},
			data: function() {

			}
		});


		this.route('chords', {
			path: '/chords',
			template: 'chords',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Chords practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Chords practice';
			},
			data: function() {

			}
		});

		this.route('modes', {
			path: '/modes',
			template: 'modes',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Modes practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Modes practice';
			},
			data: function() {

			}
		});

		this.route('scales', {
			path: '/scales',
			template: 'scales',
			onBeforeAction: function() {
				this.next();
			},
			onAfterAction: function() {
				SEO.set({
					"title": "Scales practice",
					"meta" : {
						'description': '',
						'keywords': ''
					},
					"og" : {
						'title': '',
						'image': ''
					}
				});
				document.title = 'Scales practice';
			},
			data: function() {

			}
		});

	});
});