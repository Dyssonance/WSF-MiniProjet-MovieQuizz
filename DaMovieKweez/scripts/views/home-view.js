var HomeView = Backbone.View.extend({
	el:'',

	events:{
		'Play': 'goPlay'
	},

	initialize: function() {
		this.render();

	},

	render: function() {

	},
});

var router = new Router();
Backbone.history.start();