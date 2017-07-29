import { Mongo } from 'meteor/mongo';


const UserAccounts = new Mongo.Collection('useraccounts');

export default UserAccounts;