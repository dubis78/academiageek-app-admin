'use strict';

const Boom = require('@hapi/boom');
const CreateCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/CreateCommentary');
const GetCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/GetCommentary');
const DeleteCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/DeleteCommentary');
const UpdateCommentary  = require('../../application/use_cases/adm_requeriment_fullfiment/UpdateCommentary');
module.exports = {

  /*async createCommentary(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { commentary_desc } = request.payload;

    try {
      // Treatment
      const commentary = await CreateCommentary(commentary_desc, serviceLocator);

      // Output
      return serviceLocator.userSerializer.serialize(user);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },*/


  async updateCommentary(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;
    // Input
    const commentaryId = request.params.id;
    const { commentary_desc } = request.payload;

    // Treatment
  
    const comment = await UpdateCommentary(commentaryId, commentary_desc, serviceLocator);
  console.log(comment);
    // Output
    if (comment) {
      return serviceLocator.commentarySerializer.serialize(comment);
    } else {
      return Boom.notFound('User not found');
    }
  },

  /*async findUsers(request) {

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
      return Boom.notFound('User not found');
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
  },*/

};