
Meteor.methods({
  addentry:function(entry){
    Entries.insert(entry);
  }
});
