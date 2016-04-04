Meteor.startup(function () {
  Entries.allow({
    update: function (entry) {
      return true;
    },

    insert:function(entry){
      return true;
    }
  });

  var pollAPIForEntries = function(){
    console.log("polling API for entries...");
    Meteor.call("fetchAllEntries", function(error, result){
        if(error){
          console.log("no response, maybe API is down. (" + error + ")" );
          return;
        }
        result.data.Entries.forEach(
          function(entry){
              Meteor.call("updateEntry", {_id: entry._id}, entry, {upsert:"True"});
        });
    });
  }
  Meteor.setInterval(pollAPIForEntries, 3000);
});

Meteor.publish('entries', function(){
  return Entries.find();
});
