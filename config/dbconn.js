import {Sequelize}  from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()

// add squelize connection
const squelizeConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
    })
    
    console.log("Database::connectioned",true);

    export default squelizeConnection