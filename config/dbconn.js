import {Sequelize}  from 'sequelize';
import 'dotenv/config';

// add squelize connection
const squelizeConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
    })
    
    console.log("Database::connectioned",true);

    export default squelizeConnection