Messages = new Meteor.collection("Messages");

if (Meteor.isClient) {
  Template.messages.messages = function() {
    return Messages.find({

    }, { 
      sort {
        timestamp: -1
      }, limit: 20
    });
  };

  Template.input.events({
    'click #send': function() {
      var message = $('#newMessage').val();
      var username = $('#username').val();
      if (!message || !username) {
        alert('Fill out both the fields.');
      }
      Meteor.saveMessage({
        message: message,
        username: username
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
