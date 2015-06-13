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
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
