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
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },


  async updateProspect(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const prospectId = request.params.id;
    const { id_course, id_cv_user, regis_date, state} = request.payload;

    // Treatment
  
    const prospect = await UpdateProspect(prospectId, id_course, id_cv_user, regis_date, state, serviceLocator);
    console.log(prospect);
  
    // Output
    if (prospect) {
      return serviceLocator.prospectSerializer.serialize(prospect);
    } else {
      return Boom.notFound('Prospect not found');
    }
  },

  async findProspects(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const prospect = await ListProspects(serviceLocator);

    // Output
    return prospect.map(serviceLocator.prospectSerializer.serialize);
  },

  async getProspect(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const prospectId = request.params.id;

    // Treatment
    const prospect = await GetProspect(prospectId, serviceLocator);

    // Output
    if (!prospect) {
      return Boom.notFound('Prospect not found');
    }

    return serviceLocator.prospectSerializer.serialize(prospect);
  },

  async deleteProspect(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const prospectId = request.params.id;

    // Treatment
    await DeleteProspect(prospectId, serviceLocator);

    // Output
    return h.response().code(204);
  },

};