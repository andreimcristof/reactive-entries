# reactive-entries
Meteor frontend communicating with an API (which was made with simple:rest atmosphere package).

### Getting up and running on Windows:

###### API: 

1. Install meteor: https://install.meteor.com/windows
2. Open a console terminal in the ReactiveEntriesAPI folder
3. type: meteor run -- port 3030, wait for it to install everything and it will start automatically. 
4. test that its working by accessing in browser: localhost:3030/publications/entries

###### Frontend:

1. Open a console terminal in the ReactiveEntries folder
2. type: meteor, wait for it to install everything 
3. test that its working by accessing in browser: localhost:3000

###### How to see awesomeness:

After starting both apps open a REST client e.g. Chrome's Advanced Rest Client and do POSTs with content-type ```application/json``` in the form of:
```
{"author":"blaaa", "content": "hola", "date": "new Date()", "tonality": 1}
```
... to this endpoint: 
```
http://localhost:3030/methods/addentry
```

..and the chart will update itself on the frontend. 
