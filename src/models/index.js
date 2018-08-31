const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: "databse",
    username: "username",
    password: "password",
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