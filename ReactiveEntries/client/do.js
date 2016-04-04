//Meteor.subscribe('entries');

Template.pieChart.helpers({
  /*allEntries: function(){
    return entries.find();
  }*/
});

Template.pieChart.events({
});


Meteor.call("fetchAllEntries", function(error, result){
    var arr = result.data.Entries;
    RenderNodeForceChart(arr);
    // for(var i = 0; i< arr.length; i++){
    //   Entries.insert(arr[i]);
    // };
});

// Meteor.startup(function(){
//   var entries = [];
//   var cursor = Entries.find();
//
//   for(var i = 0; i< cursor.count(); i++){
//     entries.push(cursor[i]);
//   };
//
//
//   RenderNodeForceChart(entries);
// });
