const {sequelize}=require('sequelize');
const sequelize = new Sequelize('nodejs', 'firstname', 'lastname', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
  });