import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import Polls from '/collections/polls.js';


// code to run  on server when the meteor app is started
Meteor.startup(function() {

//if no polls exist create sample data
if (Polls.find().count() === 0) {

	//create poll information
	var samplePolls = [
{
	name: 'Business Name #1',
	description: 'Serves steak and burgers. Offers delivery.',
	address: ' Business 1 4444 University Drive, Suite G, Huntsville, AL 35816 p.555-236-7766',
	question: 'Do you recommend business #1?',
	voters: [],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: [],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
	question:'How do you rate the price for the service?',
	voters: [],
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},


{
	name: 'Business Name #2',
	description: 'Provides Animal Care. 24/7 assistance line.',
	address: ' Business 2 440 University Drive, Huntsville, AL 35816 p.555-299-7766',
	question: 'Do you recommend business #2?',
	voters: [],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: [],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
voters: [],
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},
{
	name: 'Business Name #3',
	description: 'Pest Control.',
	address: ' Business 3 456 Bob Jones Drive, Huntsville, AL 35816 p.555-236-7006',
	question: 'Do you recommend business #3?',
	voters: [],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: [],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
voters: [],
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},
	];
// loop over each sample poll and insert into database
_.forEach(samplePolls, function(poll) {
	Polls.insert(poll);
console.log('The variable Polls is' + Polls);


});





}


});
