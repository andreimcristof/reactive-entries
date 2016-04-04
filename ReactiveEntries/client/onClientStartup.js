Meteor.subscribe("entries");

Meteor.startup(function(){
  Meteor.call("fetchAllEntries", function(error, result){

      result.data.Entries.forEach(
        function(entry){
            Meteor.call("updateEntry", {_id: entry._id}, entry, {upsert:"True"});
      });
  });
});
