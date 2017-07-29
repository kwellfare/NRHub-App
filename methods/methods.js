import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import Polls from '/collections/polls.js';





Meteor.methods({

	addVote: function(pollID, voteID) {

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


  