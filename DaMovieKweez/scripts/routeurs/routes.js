var AppRouteur = Backbone.Routeur.extend({

	routes: {
		'': 'home',
		'play' : 'playGame',
		'gameover' : 'gameOver',
	},

	home: function() {
		this.loadView(new HomeView());
	},

	playGame: function() {
		this.loadView(new PlayGameView());
	},

	gameOver: function() {
		this.loadView(new GameOverView());
	},

	loadView : function(view) {
		this.view && this.view.remove();
		this.view = view;
	}

});