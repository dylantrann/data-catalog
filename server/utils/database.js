import Sequelize from 'sequelize';

/** Initializes a Sequelize object, connecting it to the SQLite database */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    define: {timestamps: false},
    host: 'localhost',
    storage: 'database.sqlite',
});

export default sequelize;
