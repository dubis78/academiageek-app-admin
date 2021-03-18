'use strict';

const Boom = require('@hapi/boom');
const GetState = require('../../application/use_cases/adm_requeriment_fullfiment/GetState');
const UpdateState  = require('../../application/use_cases/adm_requeriment_fullfiment/UpdateState');
module.exports = {

  async updateState(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const stateId = request.params.id;
    const { state } = request.payload;

    // Treatment
  
    const State = await UpdateState(stateId, state, serviceLocator);
    // Output
    if (State) {
      return serviceLocator.stateSerializer.serialize(State);
    } else {
      return Boom.notFound('Prospect not found');
    }
  },

  async getState(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const prospectId = request.params.id;

    // Treatment
    const prospect = await GetState(prospectId, serviceLocator);

    // Output
    if (!prospect) {
      return Boom.notFound('Prospect not found');
    }

    return serviceLocator.stateSerializer.serialize(prospect);
  },
};