const express = require("express");//imports library Express
const app = express(); //variable app CALLS the express function.  Learned this from the Express documentation
const sequelize = require("./config/connection");//imports in the sequelize from the connection.js
const controllers = require("./controllers");
const Model = require("./models");//calls the Models to create the tables.

const PORT = 3002; //number at this point means nothing.  It's just a variable with a number in it.

app.use("/api", controllers);
//controllers is synonymous with routes.  Says in the controllers we will write the API callers, but app.use will use the content from the controllers folder, but anything coming out of there will have /api in front of it. 

//request from the user and response from the server.  Just for practice
// app.get('/', (req, res) => {
//     res.json("hi");
// });



sequelize.sync().then(() => {//the method that tells computer to connect to the database.  Sync them up. And then start the server
    app.listen(PORT, () =>  {
        console.log("I'm running.");
    }); //the function to 
    //learned from reading the documentation for Express
    //the first parameter of the listen method is looking for the number that you want your server to exist at. 
    //the reason we put a console.log is to give feedback to the user that the PORT is working. 
});


