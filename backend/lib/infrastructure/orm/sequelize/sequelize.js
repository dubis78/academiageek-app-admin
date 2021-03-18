'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('./models/AuthUsers');
<<<<<<< HEAD
=======
sequelize.import('./models/AdmRequerimentFullfiment.js');
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6

module.exports = sequelize;