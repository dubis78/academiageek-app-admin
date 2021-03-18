'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('./models/AuthUsers');
<<<<<<< HEAD
<<<<<<< HEAD
=======
sequelize.import('./models/AdmRequerimentFullfiment.js');
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
=======
sequelize.import('./models/AdmRequerimentFullfiment.js');
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec

module.exports = sequelize;