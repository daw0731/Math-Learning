const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'account',
    {
        userid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fName: {
            type: Sequelize.STRING
        },
        lName: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING,
        },
        passwordHash: {
            type: Sequelize.STRING
        },
        accountType: {
            type: Sequelize.INTEGER
        },
        createdTimestamp: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        consentBool: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        subscription:{
            type:Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)