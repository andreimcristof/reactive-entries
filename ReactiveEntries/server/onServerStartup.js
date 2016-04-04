Meteor.startup(function () {
  Entries.allow({
    update: function (entry) {
      return true;
    },

    insert:function(entry){
      return true;
    }
  });
});

Meteor.publish('entries', function(){
  return Entries.find();
});
