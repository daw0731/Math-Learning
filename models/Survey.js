const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'survey',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        engagement: {
            type: Sequelize.INTEGER
        },
        enjoyment: {
            type: Sequelize.INTEGER
        },
        challenge: {
            type: Sequelize.INTEGER
        },
        interest: {
            type: Sequelize.INTEGER
        },
        skill: {
            type: Sequelize.INTEGER
        },
        timestamp:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: true
    }
)