const express = require("express");//imports library Express
const app = express(); //variable app CALLS the express function.  Learned this from the Express documentation
const sequelize = require("./config/connection");//imports in the sequelize from the connection.js
const PORT = 3001; //number at this point means nothing.  It's just a variable with a number in it.

sequelize.sync().then(() => {//the method that tells computer to connect to the database.  Sync them up. And then start the server
    app.listen(PORT, () =>  {
        console.log("I'm running.");
    }); //the function to 
    //learned from reading the documentation for Express
    //the first parameter of the listen method is looking for the number that you want your server to exist at. 
    //the reason we put a console.log is to give feedback to the user that the PORT is working. 
});

sequelize.sync().then(() => {

});
