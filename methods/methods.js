import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Polls from '/collections/polls.js';
import { ReactiveVar } from 'meteor/reactive-var';



Meteor.methods({

	addVote: function(pollID, voteID, voters) {

	//finds current user
	var userId = Meteor.userId(); 
 
       
		//create the incrementing object so that it can be added to the corresponding vote
		var voteString = 'choices.' + voteID + '.votes';
		var actions ={};
		actions[voteString] = 1;

        
		//increment the number of votes for this choice
		Polls.update(
		{ _id: pollID },
		{ $inc: actions }, //MonoDB's $inc operator adds 1 to the vote
	    { $addToSet: {voters:userId } } //records username of voter
		

		);


	}

	

});


  


  