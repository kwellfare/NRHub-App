import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Polls from '/collections/polls.js';
import { ReactiveVar } from 'meteor/reactive-var';



Meteor.methods({

	addVote: function(pollID, voteID) {

	//finds current user
	var userId = Meteor.userId(); 
    //console.log('The current user is ' + '' + userId);
       
		//create the incrementing object so that it can be added to the corresponding vote
		var voteString = 'choices.' + voteID + '.votes';
		//var voted = 'voters.' + pollID + '.username';
		//console.log('The objects to be updated ' + ''+ voteString);
		//console.log('The objects to be added ' + ''+ voted);

		var actions ={};
		actions[voteString] = 1;
       
        
		//increment the number of votes for this choice
		Polls.update(
		{ _id: pollID}, 
		{$inc: actions }); //MonoDB's $inc operator adds 1 to the vote
	     Polls.update ({_id: pollID}, {$addToSet: { voters: userId}});
	     //{ $addToSet: {voters:userId}}//records username of voter

		
//console.log('the poll id updated was ' + '' + pollID);
	//console.log(Polls.find().fetch());

	}

	
});


  


  