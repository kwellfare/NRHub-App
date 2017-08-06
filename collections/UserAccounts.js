import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts} from 'meteor/accounts-base';
import { ReactiveVar } from 'meteor/reactive-var';



const UserAccounts = new Mongo.Collection('useraccounts');




export default UserAccounts;