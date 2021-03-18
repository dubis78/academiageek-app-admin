'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');
<<<<<<< HEAD
<<<<<<< HEAD
=======
const StateSerializer = require('../../interfaces/serializers/adm_requeriment_fullfiment/StateSerializer');
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
=======
const CommentSerializer = require('../../interfaces/serializers/CommentSerializer');
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
<<<<<<< HEAD
<<<<<<< HEAD
=======
    stateSerializer: new StateSerializer(),
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
=======
    commentSerializer: new CommentSerializer(),
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
    beans.userRepository = new UserRepositoryInMemory();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
    beans.userRepository = new UserRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    const UserRepositoryPostgres= require('../repositories/UserRepositoryPostgres');
<<<<<<< HEAD
<<<<<<< HEAD
    beans.userRepository = new UserRepositoryPostgres();
=======
    const StateRepositoryPostgres= require('../repositories/requeriment_fullfiment/StateRepositoryPostgres');
    beans.userRepository = new UserRepositoryPostgres();
    beans.stateRepository = new StateRepositoryPostgres();
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
=======
    const CommentRepositoryPostgres= require('../repositories/requeriment_fullfiment/CommentRepositoryPostgres');
    beans.userRepository = new UserRepositoryPostgres();
    beans.commentRepository = new CommentRepositoryPostgres();
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec
  } else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }

  return beans;
}

module.exports = buildBeans();
