import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Polls = new Mongo.Collection('polls');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("polls", function () {
    return Polls.find();
  });
}

if (Meteor.isClient) {
	//This code runs on the client
	Meteor.subscribe("polls");
}



export default Polls;
