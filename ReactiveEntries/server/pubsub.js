
Meteor.methods({
  fetchAllEntries : function(){
    return Meteor.http.call(
      "GET",
      "http://localhost:3030/publications/entries");
  },

  updateEntry(id, entry, option){
    Entries.update(id, entry, option);
  }
});
