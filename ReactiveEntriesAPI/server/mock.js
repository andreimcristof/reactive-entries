FillMockData = function(){
  if(Entries.find().count() === 0)
  {
    Entries.insert({
        author: "Andrei",
        content: "hello there!",
        date: new Date(),
        tonality: 0
      });

      Entries.insert({
        author: "Billy",
        content: "My name is Billy and I like Meteor!",
        date: new Date(),
        tonality: 1
      });


      Entries.insert({
        author: "Lisa",
        content: "this API is not as fast as it should be",
        date: new Date(),
        tonality: -1
      });

      Entries.insert({
        author: "Lisa",
        content: "hi my name is Lisa!",
        date: new Date(),
        tonality: 0
      });
  }
};
