
Meteor.publish("entries", function(){
  return Entries.find();
});

Meteor.startup(function () {
  FillMockData();
});
