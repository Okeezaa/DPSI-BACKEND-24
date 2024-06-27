const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dpsi_backend', 'root', '', {

host: 'localhost',
 dialect: 'mysql'
});
// Uji koneksi
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;