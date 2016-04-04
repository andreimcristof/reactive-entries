

Meteor.methods({
  fetchAllEntries : function(){
    return Meteor.http.call(
      "GET",
      "http://localhost:3030/publications/entries");
  }
});
