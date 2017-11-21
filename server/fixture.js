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
	name: 'Geordi\'s Burgers',
	description: 'Serves steak and burgers. Offers delivery.',
	address: ' Business 1 4444 University Drive, Suite G, Huntsville, AL 35816 p.555-236-7766',
	question: 'Do you recommend Geordi\'s Burgers?',
	voters: ['x'],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: ['x'],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
	question:'How do you rate the price for the service?',
	voters: ['x'],
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},


{
	name: 'Paws Vet Clinic',
	description: 'Provides Animal Care. 24/7 assistance line.',
	address: ' Business 2 440 University Drive, Huntsville, AL 35816 p.555-299-7766',
	question: 'Do you recommend Paws Vet Clinic?',
	voters: ['x'],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: ['x'],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
voters: ['x'],
	choices: [
{ text: 'Good Deal', votes: 0 },
{ text: 'Reasonable Price', votes: 0 },
{ text: 'Over Priced', votes: 0 },
	]
},
{
	name: 'Smith Pest Control',
	description: 'Fast and reliable pest control. Next day service available,',
	address: ' Business 3 456 Bob Jones Drive, Huntsville, AL 35816 p.555-236-7006',
	question: 'Do you recommend Smith Pest Control?',
	voters: ['x'],
	choices: [
{ text: 'Yes', votes: 0 },
{ text: 'No', votes: 0 },
	]
},
{
	question:'How do you rate their customer service?',
	voters: ['x'],
	choices: [
{ text: 'Good Experience', votes: 0 },
{ text: 'Poor Experience', votes: 0 },
	]
},
{
question:'How do you rate the price for the service?',
voters: ['x'],
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
//console.log('The variable Polls is' + Polls);
});
}
});
