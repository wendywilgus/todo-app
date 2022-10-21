const Sequelize = require("sequelize");
require('dotenv').config();//connects to .env file

const sequelize = new Sequelize( //the new keyword (on line 3) creates an object from the class (Sequelize)
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,   
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,//default port where mysql gets installed.
    }
);

module.exports = sequelize;
//allows us to export by accessing the sequelize variable in another file....server.js