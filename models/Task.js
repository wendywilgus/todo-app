const { Model, DataTypes } = require('sequelize');//curly bracers are object destructuring
const sequelize = require('../config/connection');//import sequelize from the connection.js where it tells how to create the database.

class Task extends Model{}//a child of the Model class coming from the sequelize libary

Task.init(//accepts 2 parameters and both are objects. The first is where you define the columns. 
    {
        id:{
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        }, 
    },
        {
            sequelize, 
            timestamps: true,//creates two more columns that tells when it was created and changed
            freezeTableName: true,//useful if you want to make the table a singular noun.  By default Sequelize will lowercase and then pluralize your table name.  This method prevents that and uses the one you give it in the Model name. 
            modelName: "user",
        },
);

module.exports = User;