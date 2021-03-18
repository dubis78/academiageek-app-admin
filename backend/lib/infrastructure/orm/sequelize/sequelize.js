'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('./models/AuthUsers');
sequelize.import('./models/AdmRequerimentFullfiment.js');

module.exports = sequelize;