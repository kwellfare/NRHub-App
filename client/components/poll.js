import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
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

		Meteor.call("addVote", pollID, voteID);
	}

});
