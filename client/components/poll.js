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

		var userId = Meteor.userId();
		//get the parent poll id
		var pollID = $(event.currentTarget).parent('.poll').data('id');
		var voteID = $(event.currentTarget).data('id');
	    //console.log(Polls.findOne({ _id: pollID },{ voters: [userId]});)
        //var voted = Polls.findOne({ _id: pollID },{ $elemMatch: { voters: [userId]}});
         var thisPollsVotes = Polls.findOne({ _id: pollID },{ voters: {$in: userId}}).voters;


        //if user is not logged in when voting it will create an alert
		if (!userId ) {
	         Bert.alert('You are required to login to vote', 'danger', 'growl-top-right');
		     return;
	    }
	    //console.log(voted);

        if( thisPollsVotes.indexOf(userId) > -1) {
	        Bert.alert('You can only vote once per poll', 'danger', 'growl-top-right');
		    return;
	    } else {
	    	Bert.alert("Your Vote Was Added", "success");
	    }
		

		//call the methods
		Meteor.call("addVote", pollID, voteID); 

},
	

});
