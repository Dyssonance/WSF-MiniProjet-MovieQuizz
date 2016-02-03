var HomeView = Backbone.View.extend({
	el:'.app',

	events:{
	},

	initialize: function() {
		console.log('Hello World');
//		this.router = new.Router();
		this.render();

	},

	render: function() {
		$.get('scripts/templates/homeTemplate.hbs', function(data) {
	    	var template = Handlebars.compile( data );
	    }.bind(this));
	}

});