import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import Polls from '/collections/polls.js';





//HANDLING THE VOTING ACTIONS
//attach events to the poll template
Template.poll.events({
	//event to handle clicking a choice
	'click .vote': function(event) {

		//prevent the default behavioer
		event.preventDefault();

		//get the parent poll id
		var pollID = $(event.currentTarget).parent('.poll').data('id');
		var voteID = $(event.currentTarget).data('id');

		//create the incrementing object so that it can be added to the corresponding vote
		var voteString = 'choices.' + voteID + '.votes';
		var action ={};
		action[voteString] = 1;

		//increment the number of votes for this choice
		Polls.update(
			{ _id: pollID },
			{ $inc: action } //MonoDB's $inc operator adds 1 to the vote

			);
	}

});
