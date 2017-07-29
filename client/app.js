import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import { Accounts} from 'meteor/accounts-base';

import Polls from '/collections/polls.js';



// Give access to the poll objects from database and assign variables

Template.body.helpers({
  

polls: function() {
return Polls.find();
}

  
});



UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});

ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});