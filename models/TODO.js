const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Todo extends Model {}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        // createdAt
        // priority
        // due
    },
    {
        sequelize
    }
);

module.exports = Todo;