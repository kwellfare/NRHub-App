import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';



import Polls from '/collections/polls.js';


// code to run  on server when the meteor app is started
Meteor.startup(function() {

//if no polls exist create sample data
if (Polls.find().count() === 0) {

	//create samples
	var samplePolls = [
{
	name: 'Business Name #1',
	description: 'Serves steak and burgers. Offers delivery.',
	question: 'Do you recommend business #1?',
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
	question:'How do you rate the price for the service?',
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},


{
	name: 'Business Name #2',
	description: 'Provides Animal Care. 24/7 assistance line.',
	question: 'Do you recommend business #2?',
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},
{
	name: 'Business Name #3',
	description: 'Pest Control.',
	question: 'Do you recommend business #3?',
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},
	];
// loop over each sample poll and insert into database
_.each(samplePolls, function(poll) {
	Polls.insert(poll);
});


}


});
