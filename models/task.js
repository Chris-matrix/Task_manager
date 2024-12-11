import { DataTypes } from "sequelize";
import sequlize from "../config/dbconn.js";

// add comments here

        const Task = sequlize.define("Task", {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        dueDate: {
            type: DataTypes.DATE,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

export default Task;