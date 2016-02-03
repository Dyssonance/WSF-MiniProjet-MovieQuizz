var Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'play' : 'playGame',
		'gameover' : 'gameOver',
	},

	home: function() {
		this.view = new HomeView();
	},

	playGame: function() {
		this.view = new PlayView();
	},

	gameOver: function() {
		this.view = new GameOverView();
	},
});