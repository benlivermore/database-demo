# database-demo
A quick setup script to add some data to a mongo db


##setup
To set up your demo

1. Open a shell terminal.  
1. Run `mongod` to start your mongoDB server.
1. Open another shell terminal.
1. `cd` to the root of database-demo.
1. Run `mongo < createDemo.js` to create the demo database and related data in mongo.
1. Now run `mongo` to open the mongo shell.
1. Now run `use demo`
1. Finally run `show collections` and you should see an "athletes" collection
