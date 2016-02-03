var PlayView = Backbone.View.extend({
	el:'.container',

	events:{
		'change input': 'readAnswer'
	},

	readAnswer: function(event) {
		var $input = $(event.currentTarget);
    	var inputValue = $input.val();
    	var actorPresence = $input.parents('li').attr('data-id');
    	var targetModel = this.dataCollection.get(isPresent);

    	//Checks if the actor is actually present in the movie or not
    	if(isPresent) {
    		//If the actor is present, increases the player's score and gets a new question.
    		playerScore++;
    		round++;
    		getNewQuestion(round);
    	} else {
    		//If the actor isn't present, loads the Game Over and gives it the player's score.
    		this.view.remove();
    		this.view = new GameOverView(playerScore);
    	}
	},

	getNewQuestion: function(round) {
		//Goes to get the new question
		get(.../lib/api.json[round]);
		return;

	},

	initialize: function() {
		var playerScore = 0;
		var round = 0;

		getNewQuestion(round);

		this.render();

	},

	render: function() {

	},
});