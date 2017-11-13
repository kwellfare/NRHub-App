import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts} from 'meteor/accounts-base';

import './app.body.html';

import Polls from '/collections/polls.js';

// Give access to the poll objects from database and assign variables
//body helper only works within the body of the app
//returns all the polls in the collection
Template.body.helpers({
  
polls: function() {
return Polls.find();
}
 
});

Template.body.onCreated(function() {
   var self = this;
  self.subscribe('home');
});

//An index helper to find each poll

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
      //console.log('The index array is' + item);
    });
  }
});

// A account helper that makes users sign up by username

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});




/*Scroll to top when arrow up clicked BEGIN
uses scroll function*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 900) {                     //assess the height the scrollbar will fade in 
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");  //scrolls to very top height of page on click
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


