const Sequelize = require('sequelize');
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD


const sequelize = new Sequelize({
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    dialect: 'sqlite',
    // host: "localhost",
    // port: 5432,
    storage: "database.sqlite"
})

const UserModel = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$", 'i'],
            len: [4, 50]
        }
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$", 'i'],
            len: [4, 50]
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    
    // Timestamps
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
},
{
    timestamps: true,
})

module.exports = { 
    UserModel,
    sequelize
}