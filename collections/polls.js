import { Mongo } from 'meteor/mongo';



const Polls = new Mongo.Collection('polls');

export default Polls;