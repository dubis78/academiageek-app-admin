'use strict';

const Boom = require('@hapi/boom');
const ListUsers = require('../../application/use_cases/ListUsers');
const CreateUser = require('../../application/use_cases/CreateUser');
const GetUser = require('../../application/use_cases/GetUser');
const DeleteUser = require('../../application/use_cases/DeleteUser');
const {generateTimestampUnix} = require('./../../application/utilities/general_functions')

module.exports = {

  async createUser(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { full_name, last_name, email, pass, status, admin, parent_id } = request.payload;
    
    const register_time = await generateTimestampUnix()
        
    // Treatment
    const user = await CreateUser(full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id, serviceLocator);

    // Output
    return serviceLocator.userSerializer.serialize(user);
  },

  async findUsers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const users = await ListUsers(serviceLocator);

    // Output
    return users.map(serviceLocator.userSerializer.serialize)
  },

  async getUser(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetUser(userId, serviceLocator);

    // Output
    if (!user) {
      return Boom.notFound();
    }
    return serviceLocator.userSerializer.serialize(user);
  },

  async deleteUser(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteUser(userId, serviceLocator);

    // Output
    return h.response().code(204);
  },

};
