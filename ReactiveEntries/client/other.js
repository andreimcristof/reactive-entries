Template.nodeForceChart.helpers({
  entriesWithTonality : function(){
    return Entries.find();
  },

  entryCount : function(){
    return Entries.find().count();
  }
});

Template.nodeForceChart.rendered = function(){

  Tracker.autorun(function(){
    
    RenderNodeForceChart(Entries.find().fetch());
  });

};

Template.nodeForceChart.events({
});
