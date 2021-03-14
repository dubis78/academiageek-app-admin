'use strict';

const Boom = require('@hapi/boom');
const ListProspects = require('../../application/use_cases/prospect/ListProspect');
const CreateProspect = require('../../application/use_cases/prospect/CreateProspect');
const GetProspect = require('../../application/use_cases/prospect/GetProspect');
const DeleteProspect = require('../../application/use_cases/prospect/DeleteProspect');
const UpdateProspect  = require('../../application/use_cases/prospect/UpdateProspect');
module.exports = {

  async createProspect(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_course, id_cv_user, regis_date, state } = request.payload;

    try {
      // Treatment
      const prospect = await CreateProspect(id_course, id_cv_user, regis_date, state, serviceLocator);

      // Output
      return serviceLocator.prospectSerializer.serialize(prospect);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

/*
  async updateProspect(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;
    const { full_name, last_name, email, pass, status, admin, parent_id } = request.payload;

    // Treatment
  
    const user = await UpdateProspect(userId, full_name, last_name, email, pass, status, admin, parent_id, serviceLocator);
  
    // Output
    if (user) {
      return serviceLocator.userSerializer.serialize(user);
    } else {
      return Boom.notFound('User not found');
    }
  },

  async findUsers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const users = await ListProspects(serviceLocator);

    // Output
    return users.map(serviceLocator.userSerializer.serialize)
  },

  async getProspect(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetProspect(userId, serviceLocator);

    // Output
    if (!user) {
      return Boom.notFound('User not found');
    }

    return serviceLocator.userSerializer.serialize(user);
  },

  async deleteProspect(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteProspect(userId, serviceLocator);

    // Output
    return h.response().code(204);
  },
*/
};